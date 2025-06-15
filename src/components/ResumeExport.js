import React, { useState } from 'react';

export default function ResumeExport({ 
  filename = '简历.pdf',
  className = '',
  style = {} 
}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const loadHtml2Pdf = () => {
    return new Promise((resolve, reject) => {
      // 检查是否已经加载
      if (window.html2pdf) {
        resolve(window.html2pdf);
        return;
      }

      // 动态加载html2pdf.js
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => {
        if (window.html2pdf) {
          resolve(window.html2pdf);
        } else {
          reject(new Error('html2pdf加载失败'));
        }
      };
      script.onerror = () => reject(new Error('html2pdf脚本加载失败'));
      document.head.appendChild(script);
    });
  };

  const exportToPDF = async () => {
    try {
      setIsGenerating(true);

      // 动态加载html2pdf
      const html2pdf = await loadHtml2Pdf();

      // 获取简历内容
      const element = document.querySelector('.resume-content') || 
                     document.querySelector('.resume-container') ||
                     document.querySelector('article') ||
                     document.body;

      if (!element) {
        throw new Error('未找到简历内容元素');
      }

      // PDF配置选项
      const opt = {
        margin: [10, 10, 10, 10],
        filename: filename,
        image: { 
          type: 'jpeg', 
          quality: 0.95 
        },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          allowTaint: false,
          logging: false,
          height: element.scrollHeight,
          width: element.scrollWidth
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after'
        }
      };

      // 生成PDF
      await html2pdf().set(opt).from(element).save();
      
    } catch (error) {
      console.error('PDF生成失败:', error);
      
      // 用户友好的错误提示
      const errorMessage = error.message.includes('html2pdf') 
        ? 'PDF生成库加载失败，请检查网络连接后重试'
        : 'PDF生成失败，请尝试使用浏览器打印功能';
        
      alert(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`export-buttons ${className}`} style={style}>
      <button 
        className="pdf-export-btn primary" 
        onClick={exportToPDF}
        disabled={isGenerating}
        title="一键导出PDF"
      >
        {isGenerating ? '⏳ 生成中...' : '📄 导出PDF'}
      </button>
    </div>
  );
}
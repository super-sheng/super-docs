---
title: 王盛 - 前端开发工程师
description: 王盛的个人简历
hide_table_of_contents: true
custom_edit_url: null
---

import ResumeExport from '@site/src/components/ResumeExport';

<div className="resume-container">

<ResumeExport filename="王盛-前端开发工程师-简历.pdf" />

<div className="resume-content">

<div className="resume-header">
  <div className="resume-info">
    <h1>王盛</h1>
    <h3>前端开发工程师</h3>
    <div className="contact-info">
      📧 max.capricorn1209@gmail.com   &nbsp;&nbsp;
      📱 188-2167-7596 &nbsp;&nbsp;
      🌐 github.com/super-sheng &nbsp;&nbsp;
      📍 西安市
    </div>
  </div>
  <div className="resume-avatar">
    <img src="img/avatar.jpg" alt="头像" />
  </div>
</div>

---

## 💡 个人简介

5年前端开发经验，熟练掌握React/Vue生态，有丰富的项目开发和团队协作经验。擅长构建高性能、用户友好的Web应用，对新技术保持敏锐嗅觉。

---

## 🛠 技术栈

- HTML5 / CSS3 / JavaScript(ES6+)
- TypeScript
- Sass / Less / Styled-components

- React 16+ / React Hooks
- Vue 2/3 / Vuex / Pinia
- Next.js / Nuxt.js

- Webpack / Vite / Rollup
- ESLint / Prettier
- Git / GitHub Actions

- Ant Design / Element UI / Vant
- Figma / Sketch协作
- 响应式设计 / 移动端适配

---

## 💼 工作经历

### 🏢 ABC科技有限公司 | 高级前端工程师 | 2022.03 - 至今

**主要职责：**
- 负责公司核心产品的前端架构设计和开发
- 带领3人前端团队，制定开发规范和流程
- 与产品、设计团队协作，确保项目按时交付

**核心项目：**
- **企业管理系统** - 使用React + TypeScript + Ant Design构建，服务1000+企业用户
- **移动端H5应用** - Vue3 + Vant开发，日活跃用户10万+

**技术成果：**
- 搭建前端CI/CD流水线，部署效率提升60%
- 优化打包配置，首屏加载时间减少40%

### 🏢 XYZ互联网公司 | 前端工程师 | 2020.06 - 2022.02

**主要职责：**
- 参与电商平台前端开发和维护
- 负责组件库的设计和开发

**核心项目：**
- **电商平台重构** - 从jQuery迁移到Vue2，用户体验显著提升
- **通用组件库** - 开发20+可复用组件，团队开发效率提升30%



---

## 🎓 教育背景

**西安航空职工大学** | 计算机科学与技术 | 2015-2018

---

## 🏆 项目作品

### 🚀 个人博客系统
**技术栈：** Next.js + MDX + Tailwind CSS  
**GitHub：** github.com/zhangsan/blog  
**特色：** 支持Markdown写作、暗黑模式、评论系统、SEO优化

### 📱 天气预报小程序
**技术栈：** 微信小程序 + 云开发  
**特色：** 实时天气数据、位置服务、精美UI设计

---

## 🌟 个人优势

- **技术热情**：关注前端发展趋势，持续学习新技术
- **团队协作**：良好的沟通能力，乐于分享和帮助同事
- **问题解决**：具备独立分析和解决复杂技术问题的能力
- **用户思维**：注重用户体验，追求产品细节

</div>

</div>

<style>
{`
.resume-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  position: relative;
}

.export-buttons {
  position: fixed;
  top: 92px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.pdf-export-btn {
  background: linear-gradient(135deg, #471159 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 120px;
  justify-content: center;
}

.pdf-export-btn.primary {
  background: linear-gradient(135deg, #471159 0%, #764ba2 100%);
}

.pdf-export-btn.secondary {
  background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
  font-size: 12px;
  padding: 10px 16px;
}

.pdf-export-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.pdf-export-btn.primary:hover:not(:disabled) {
  background: linear-gradient(135deg,rgb(124, 20, 148) 0%, #6a4190 100%);
}

.pdf-export-btn.secondary:hover:not(:disabled) {
  background: linear-gradient(135deg, #5a6268 0%, #3d4142 100%);
}

.pdf-export-btn:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.pdf-export-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #471159 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.resume-info h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.resume-info h3 {
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: 400;
  opacity: 0.9;
}

.contact-info {
  font-size: 0.95rem;
  opacity: 0.9;
}

.resume-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid rgba(255,255,255,0.3);
  object-fit: cover;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.skills-grid > div {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

@media print {
  .resume-container {
    max-width: none;
    margin: 0;
    font-size: 12px;
  }
  
  .export-buttons,
  .pdf-export-btn {
    display: none !important;
  }
  
  .resume-header {
    background: #667eea !important;
    color: white !important;
    -webkit-print-color-adjust: exact;
  }
  
  .navbar, .footer, .pagination-nav {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .resume-header {
    flex-direction: column;
    text-align: center;
  }
  
  .resume-avatar {
    margin-top: 1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .export-buttons {
    position: fixed;
    top: 10px;
    right: 10px;
    gap: 8px;
  }
  
  .pdf-export-btn {
    padding: 8px 12px;
    font-size: 11px;
    border-radius: 20px;
    min-width: 100px;
  }
  
  .pdf-export-btn.secondary {
    font-size: 10px;
    padding: 6px 10px;
  }
}
`}
</style>
# 今天做什么 PWA

每日家务待办 + 巡检项处理清单,基于 React + Vite 构建,支持 iPhone 离线使用。

## 功能

- **家务待办**:按分类分组,仅显示今日到期项,勾选完成,每日自动重置
- **周期设定**:设定每项家务的执行周期(每日/每周/每月等)与最后执行时间,待办页自动过滤
- **巡检清单**:按区域分组,状态循环切换(待检 → 正常 → 异常),支持异常备注
- **数据持久化**:LocalStorage 本地存储,关闭浏览器数据不丢失
- **每日自动重置**:跨天自动清零完成状态
- **PWA 离线**:添加到 iPhone 主屏幕后,断网也能使用

## 本地开发

```bash
npm install
npm run dev
```

## 单文件构建(传到 iPhone 直接用)

```bash
npm run build:single
```

产物在 `dist-single/index.html`,通过 AirDrop / 微信 / iCloud 传到 iPhone,Safari 打开即用。

## 完整 PWA 构建

```bash
npm run build      # 产出 dist/ 目录
```

部署到 Vercel / Netlify / GitHub Pages 后,iPhone Safari 打开 → 分享 →「添加到主屏幕」。

## 项目结构

```
home-checklist/
├── index.html
├── vite.config.js          # PWA 构建配置
├── vite.single.config.js   # 单文件构建配置
├── public/                 # PWA 图标
└── src/
    ├── main.jsx
    ├── App.jsx             # 根组件
    ├── index.css           # 全局样式 + 色板
    ├── App.css
    ├── data/defaults.js    # 默认数据
    ├── hooks/useLocalStorage.js  # 持久化 + 周期计算
    └── components/
        ├── TabNav.jsx          # 三标签切换
        ├── ProgressBar.jsx     # 环形进度
        ├── ChoresModule.jsx    # 待办模块
        ├── ScheduleModule.jsx  # 周期设定模块
        ├── InspectionModule.jsx# 巡检模块
        ├── ChoreItem.jsx
        ├── ScheduleItem.jsx
        ├── InspectionItem.jsx
        └── AddItemSheet.jsx    # 添加面板
```

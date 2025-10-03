// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReownAppkit, ReownAppkitProvider } from '@reown/appkit'

// 1. Lấy Project ID từ biến môi trường
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

// 2. Kiểm tra xem projectId có tồn tại không
if (!projectId) {
  throw new Error("VITE_REOWN_PROJECT_ID is not set in .env file");
}

// 3. Cấu hình Reown Appkit
const config = {
    projectId: projectId,
    appName: 'Be a Celorian',
}
new ReownAppkit(config);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReownAppkitProvider>
      <App />
    </ReownAppkitProvider>
  </React.StrictMode>,
)
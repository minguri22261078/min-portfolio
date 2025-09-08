import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'; // GitHub Pages에서 새로고침 404 방지

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            {/* 라우터로 앱을 감싸기 */}
            {/* basename에 Repository 경로를 추가 */}
            <App />
        </HashRouter>
    </StrictMode>,
)


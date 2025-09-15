import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Dday from './Dday.jsx';

function App() {
    return (
        <>
            <nav>
                <Link to="/resume">📜 이력</Link> | {" "}
                <Link to="/portfolio">🎨 포트폴리오</Link> | {" "}
                <Link to="/about">😊 자기소개</Link> | {" "}
                <Link to="/dday">🎓 졸업까지</Link>
            </nav>
            <main className="main-content">
                <Routes>
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/dday" element={<Dday />} />
                </Routes>
            </main>
        </>
    )
}

export default App

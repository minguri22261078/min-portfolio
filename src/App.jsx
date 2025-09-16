import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Profile from './Profile.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import DesignProcess from './DesignProcess.jsx';
import Skillset from './Skillset.jsx';
import About from './About.jsx';
import Dday from './Dday.jsx';

function App() {
    return (
        <>
            <div className="dday-container">
                <Dday />
            </div>
            <nav>
                <Link to="/profile">👤 프로필</Link> | {" "}
                <Link to="/resume">📜 이력</Link> | {" "}
                <Link to="/portfolio">💻 프로젝트</Link> | {" "}
                <Link to="/design-process">🎨 디자인 프로세스</Link> | {" "}
                <Link to="/skillset">🛠️ 스킬셋</Link> | {" "}
                <Link to="/about">😊 자기소개</Link>
            </nav>
            <main className="main-content">
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/design-process" element={<DesignProcess />} />
                    <Route path="/skillset" element={<Skillset />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </>
    )
}

export default App

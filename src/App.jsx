import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "@/pages/Home.jsx";

export default function App() {
    return (
        <>
            <nav style={{ position: "fixed", top: 16, left: 16, zIndex: 10 }}>
                <NavLink to="/" style={{ marginRight: 12 }}>Home</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                {/* 기타 모든 경로를 홈으로 */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}
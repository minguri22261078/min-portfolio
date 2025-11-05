import { Routes, Route, NavLink } from "react-router-dom";
import Home from "@/pages/Home.jsx";

export default function App() {
    return (
        <>
            {/* 간단한 네비게이션 (필요 없으면 삭제) */}
            <nav style={{ position: "fixed", top: 16, left: 16, zIndex: 10 }}>
                <NavLink to="/" style={{ marginRight: 12 }}>Home</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
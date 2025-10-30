import { motion } from "framer-motion";
import "./CircularText.css";

export default function CircularText({
                                         text = "MIN PORTFOLIO • MIN PORTFOLIO • ",
                                         radius = 520,           // px 반지름
                                         fontSize = 80,          // 글자 크기
                                         duration = 30,          // 회전 주기(초)
                                         color = "rgba(255,255,255,0.56)", // 기본 색
                                         accentColor = "#7AA2FF",          // ⭐️ min 색 (하늘+보라)
                                         className = "",
                                     }) {
    const letters = Array.from(text);
    const toDeg = (rad) => (rad * 180) / Math.PI;

    // "min" (대소문자 무시) 구간 인덱스들 찾기
    const lower = text.toLowerCase();
    const accentIdx = new Set();
    for (let i = 0; i <= lower.length - 3; i++) {
        if (lower.slice(i, i + 3) === "min") {
            accentIdx.add(i); accentIdx.add(i + 1); accentIdx.add(i + 2);
        }
    }

    return (
        <motion.div
            className={`circular-text ${className}`}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration }}
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 0,
                height: 0,
                pointerEvents: "none",
            }}
        >
            {letters.map((ch, i) => {
                const angle = (i / letters.length) * 2 * Math.PI; // 0~2π
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const transform = `translate(${x}px, ${y}px) rotate(${toDeg(angle) + 90}deg)`;

                const charColor = accentIdx.has(i) ? accentColor : color;

                return (
                    <span
                        key={i}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            transform,
                            transformOrigin: "0 0",
                            fontSize,
                            fontWeight: 900,
                            color: charColor,
                            lineHeight: 1,
                            whiteSpace: "pre",
                            userSelect: "none",
                        }}
                    >
            {ch}
          </span>
                );
            })}
        </motion.div>
    );
}
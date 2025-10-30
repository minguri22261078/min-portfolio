import { useEffect, useRef } from "react";

export default function FadeUp({ children, className = "", delay = 0 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.style.transitionDelay = `${delay}s`;
                el.classList.add("show");
                obs.disconnect();
            }
        }, { threshold: 0.4 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);

    return <div ref={ref} className={`fade ${className}`}>{children}</div>;
}
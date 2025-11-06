import CircularText from "@/components/CircularText.jsx";
import FadeUp from "@/components/FadeUp.jsx";
import PhotoBlock from "@/components/PhotoBlock.jsx";
import IntroShowcase from "@/pages/IntroShowcase.jsx";
import styles from "./Home.module.css";
import hero3d from "@/assets/hero-3d.png";

export default function Home() {
    return (
        <main className={styles.snapContainer}>
            {/* PAGE 1: 홈(히어로) */}
            <section className={`${styles.page} ${styles.heroPage}`}>
                <div className={styles.heroPoster}>
                    <CircularText />
                    <div className={styles.poster}>
                        <div className={styles.halo} aria-hidden />
                        <FadeUp delay={0.05}>
                            <PhotoBlock tall label="3D illustration" src={hero3d} />
                        </FadeUp>
                    </div>
                </div>

                {/* 아래로 드래그 유도 표시(선택) */}
                <div className={styles.dragHint} aria-hidden>drag / scroll</div>
            </section>

            {/* PAGE 2: 포트폴리오 섹션 */}
            <section className={styles.page}>
                <IntroShowcase />
            </section>
        </main>
    );
}
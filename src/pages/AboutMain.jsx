import CircularText from "@/components/CircularText.jsx";
import FadeUp from "@/components/FadeUp.jsx";
import PhotoBlock from "@/components/PhotoBlock.jsx";
import styles from "./AboutMain.module.css";
import PortfolioSection from "@/components/PortfolioSection.jsx";


export default function AboutMain() {
    return (
        <main>
            <section className={styles.heroPoster}>
                {/* 원형 타이포: 컴포넌트가 스스로 중앙 고정/회전 */}
                <CircularText
                    text={"MIN PORTFOLIO • MIN PORTFOLIO • "}
                    radius={520}
                    fontSize={80}
                    duration={30}
                    color="rgba(255,255,255,0.28)"
                    accentColor="#7AA2FF"
                    className={styles.ringInner}
                />

                {/* 중앙 3D 일러스트 */}
                <div className={styles.poster}>
                    <div className={styles.halo} aria-hidden />
                    <FadeUp delay={0.05}>
                        <PhotoBlock tall label="3D illustration" src="/images/hero-3d.png" />
                    </FadeUp>
                </div>
            </section>

            <PortfolioSection
                title="포트폴리오"
                subtitle="ABC"
            >
            </PortfolioSection>
        </main>
    );
}
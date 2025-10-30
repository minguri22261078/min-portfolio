import styles from "./PortfolioSection.module.css";

export default function PortfolioSection({
                                             title = "포트폴리오",
                                             subtitle = "ABC",
                                             children
                                         }) {
    return (
        <section className={styles.section}>
            <div className={styles.center}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                {children /* 필요 시 카드/버튼 등 추가 삽입 */}
            </div>
        </section>
    );
}
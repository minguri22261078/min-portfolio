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
                {children}
            </div>
        </section>
    );
}
import styles from "./PhotoBlock.module.css";

export default function PhotoBlock({ tall=false, label="image", src }) {
    return (
        <div className={`${styles.photo} ${tall ? styles.tall : ""}`}>
            {src ? <img src={src} alt={label} className={styles.img} /> : null}
            {!src && <div className={styles.hint}>drop {label} here</div>}
        </div>
    );
}
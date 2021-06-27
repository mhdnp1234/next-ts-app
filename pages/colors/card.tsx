import styles from '../../styles/Colors.module.scss'

export default function ColorCard({color, onSelect}: any) {
    return <div className={styles["color-card"]} onClick={onSelect}>
        <div style={{backgroundColor: color?.hex}} className={styles["color-area"]}></div>
        <div className={styles["color-footer"]}>{color?.hex.toLowerCase()}</div>
    </div>
}
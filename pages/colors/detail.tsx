import styles from '../../styles/Colors.module.scss'
import ColorCard from './card'

export default function Detail({onClear, color, allColors}: any) {
    const indexOfDetailColor = allColors && allColors.findIndex((c: any) => c.name === color?.name)
    const startIndex = indexOfDetailColor -2 < 0 ? 0 : indexOfDetailColor -2
    const relatedColors = allColors && allColors.slice(startIndex, indexOfDetailColor + 3)

    return <div className={styles.detail}>
        <div className={styles["detail-view"]}>
            <div className={styles["main-color-detail"]}>
                <ColorCard key={`${color?.name}`} color={color} />
            </div>
            <div className={styles["related-color"]}>
                {relatedColors && relatedColors.map((c: any) => <ColorCard key={`${c?.name}`} color={c} /> )}
            </div>
        </div>
        <button className={styles["clear-button"]} onClick={onClear}>Clear</button>
    </div>
}
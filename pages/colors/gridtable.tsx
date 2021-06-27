import { useEffect, useState } from "react"
import ColorCard from "./card"
import styles from '../../styles/Colors.module.scss'


export default function GridTable({data, onSelect, selectedPage, onPageChange} :any) {
    const [currentPage, setCurrentPage] = useState(selectedPage || 1)
    useEffect(() => {
        setCurrentPage(selectedPage)
    }, [selectedPage])

    const pageSize= 15
    const totalPages = data && Math.ceil(data.length/pageSize)
    const visibleDataSet = data && data.slice((currentPage -1)*pageSize, pageSize*currentPage)
    const pageArray = Array.from({length: totalPages}, (_, i) => i + 1)

    return <div className={styles.gridlayout}>
        <div className={styles["grid-data"]}>
            {visibleDataSet.map((color: object, index: BigInteger) => <div className={styles["card-area"]}><ColorCard key={`${color.name}`} color={color} onSelect={() => onSelect(color, index)} /></div> )}
        </div>
        
        <div className={styles.pagination}>{pageArray.map(page => <div key={`page-${page}`} className={styles.page} onClick={() => {
            setCurrentPage(page)
            onPageChange && onPageChange(page)
            }}>{page}</div>)}</div>
        
    </div>
}
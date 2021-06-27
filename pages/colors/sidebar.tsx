import Link from 'next/link'

import styles from '../../styles/Colors.module.scss'
import { useSelector } from 'react-redux'

export default function SideBar({}) {
    const colorState = useSelector((state: any) => state.colors)
    const dataSet = Object.values(colorState.basicColors)

    return <div className={styles.navigation}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button className={styles["random-button"]}>Random Color</button>
        </div>
        {dataSet.map((color : any, index) => <Link key={`nav-${index}`} href={{ pathname:'/colors', query: { nav : color }}} ><a className={styles.item}>{color}</a></Link>)}
    </div>
}
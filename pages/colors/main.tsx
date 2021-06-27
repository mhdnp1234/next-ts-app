import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Colors.module.scss'
import GridTable from './gridtable'
import Detail from './detail'

export default function Main() {
    const router: any = useRouter()
    const colorState = useSelector((state: any) => state.colors)
    const [selectedColorGroup, setSelectedColorGroup] = useState(router.query.nav || '')
    const [detailColor, setDetailColor] = useState()
    const [selectedPage, setSelectedPage] = useState(1)
    const isDetailMode = !!detailColor
    useEffect(() => {
        setSelectedColorGroup(router.query.nav)
        setDetailColor(undefined)
        setSelectedPage(1)
    }, [router.query.nav])

    const colorDataSet = Object.values(colorState.basicColors).indexOf(selectedColorGroup) >-1 ? colorState.allColors[selectedColorGroup.toUpperCase()] : colorState.flatAllColours

    return <div className={styles.main}>
        {
            isDetailMode ? 
            <Detail onClear={() => setDetailColor(undefined)} color={detailColor} allColors={colorDataSet}></Detail> :
            <GridTable  data={colorDataSet} onSelect={(data: any) => {setDetailColor(data)}} selectedPage={selectedPage} onPageChange={(page: any) => setSelectedPage(page)}/>
        }
    </div>
}
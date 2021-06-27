import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/Colors.module.scss'
import GridTable from './gridtable'
import Detail from './detail'

export default function() {
    const router = useRouter()
    const colorState = useSelector(state => state.colors)
    const [selectedColorGroup, setSelectedColorGroup] = useState(router.query.nav || '')
    const [detailColor, setDetailColor] = useState()
    const [selectedPage, setSelectedPage] = useState(1)
    const isDetailMode = !!detailColor
    useEffect(() => {
        setSelectedColorGroup(router.query.nav)
        setDetailColor(null)
        setSelectedPage(1)
    }, [router.query.nav])

    const colorDataSet = Object.values(colorState.basicColors).indexOf(selectedColorGroup) >-1 ? colorState.allColors[selectedColorGroup.toUpperCase()] : colorState.flatAllColours

    return <div className={styles.main}>
        {
            isDetailMode ? 
            <Detail onClear={() => setDetailColor(null)} color={detailColor} allColors={colorDataSet}></Detail> :
            <GridTable  data={colorDataSet} onSelect={(data: object) => {setDetailColor(data)}} selectedPage={selectedPage} onPageChange={(page) => setSelectedPage(page)}/>
        }
    </div>
}
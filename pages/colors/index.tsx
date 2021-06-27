import styles from '../../styles/Colors.module.scss'
import SideBar from './sidebar'
import Header from './header'
import Main from './main'

export default function ColorContainer({}) {

    return <div className={styles.root}>
        <Header />
        <div style={{display: 'flex'}}>
        <SideBar />
        <Main />
        </div>
    </div>
}
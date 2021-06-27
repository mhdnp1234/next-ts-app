import Image from 'next/image'

import styles from '../../styles/Colors.module.scss'
import logo from '../../public/logo-symbol.svg'
import Link from 'next/link'

function SearchBar() {
    return <input className={styles.input} placeholder="Search" ></input>
}

export default function () {
    return <div className={styles.header}>
        <Link href="/colors">
        <Image src={logo} alt="" />
        </Link>
        <SearchBar />
    </div>
}
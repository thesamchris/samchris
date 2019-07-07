import React from 'react'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.header__container}>
        <div className={styles.logo} />
        <p>Website will be live by 4:00 p.m. (Brunei Time) on 13th July 2019</p>
    </header>
)

export default Header
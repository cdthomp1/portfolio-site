import Link from 'next/link'
import styles from '../styles/Navigation.module.css'
import React from 'react'

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src="/images/Dev.png" />
                <p>Cameron<br /> Thompson</p>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menuItem}><Link href="/">Home</Link></div>
                <div className={styles.menuItem}><Link href="/about">About</Link></div>
                <div className={styles.menuItem}><Link href="/projects">Projects</Link></div>
                <div className={styles.menuItem}><Link href="/articles">Articles</Link></div>
                <div className={styles.menuItem}><Link href="/construction">Contact</Link></div>
            </div>
        </div>
    )
}

export default Navigation
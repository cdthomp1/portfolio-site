import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({ document }) => {
    console.log(document)
    return (
        <div className={styles.card}>
            <img className={styles.cardHeader} src={document.frontmatter.cover_image}/>
            <h2>{document.frontmatter.title}</h2>
            <div className={styles.cardLink}>
                <Link href="/construction">Learn More</Link>
            </div>
        </div>
    )
}

export default Card
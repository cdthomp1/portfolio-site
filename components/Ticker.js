import React from 'react'
import styles from '../styles/Ticker.module.scss'

const Ticker = () => {
    var video = "Test Video";
    var link = "https://cameronthompson.io"
    return (
        <div>
            <div className={styles.tickerWrap}>
                <div className={styles.ticker}>
                    <div className={styles.ticker__item}>Currently Watching: {video}</div>
                    <div className={styles.ticker__item}>Join me here: <a a href={link}>{link}</a> </div>
                </div>
            </div>
        </div>
    )
}

export default Ticker

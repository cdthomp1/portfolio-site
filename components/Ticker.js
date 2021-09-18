import React from 'react'
import styles from '../styles/Ticker.module.scss'

const Ticker = () => {
    var video = "Test Video";
    var link = "https://cameronthompson.io"
    return (
        <div>
            <div className={styles.tickerWrap}>
                <div className={styles.ticker}>
                    <div className={styles.ticker__item}>Hey this site is under live construction, you may notice changes!</div>
                </div>
            </div>
        </div>
    )
}

export default Ticker

import React from 'react'
import styles from '../styles/About.module.css'

const about = ({launches}) => {
    console.log(launches)
    return (
        <>
            <h1>About Me</h1>
            <div className={styles.spaceXCard}>
                <h3>SpaceX Info</h3>
               <h4>Latest Launch</h4>
               <p>{launches}</p>
            </div>
        </>
    )
}

export async function GetServerSideProps(context) {
    var res = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const launches = await res.json();
    console.log(launches)
    return {
        props: {
            launches: {launches},
        },
    }
}

export default about

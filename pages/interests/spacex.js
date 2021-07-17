import React from 'react'
import styles from '../../styles/Spacex.module.css'
import RanImage from '../../components/RanImage'
import Card from '../../components/Card'

const spacex = ({ launches, upcomingLaunches }) => {
    // console.log(upcomingLaunches)
    var date = new Date(launches.date_utc)
    var mapedUpComing = upcomingLaunches.map(launch => {
        var patch;
        if (launch.links.patch.small === null) {
            patch = "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
        } else {
            patch = launch.links.patch.small
        }
        return {
            cover_image: patch,
            title: launch.name,
        }
    })
    console.log(mapedUpComing)
    return (
        <div className={styles.container}>
            <div className={styles.latest}>
                <h2 className={styles.title}>Latest Launch<br />{launches.name}</h2>
          
                <div className={styles.latestInner}>
                    <div className={styles.patch}>
                        <img src={launches.links.patch.small} />
                    </div>
                    <div className={styles.images}>
                        0
                    </div>
                    <div className={styles.launchInfo}>
                        <h3 className={styles.title}>Launch Date: </h3>
                        <p className={styles.info}>{date.toString()}</p>
                        <h3 className={styles.title}>Details: </h3>
                        <p className={styles.info}>{launches.details}</p>
                    </div>
                </div>
            </div>
            <div className={styles.upcoming}>
                {mapedUpComing.map((launch, index) => { return (<Card key={index} document={launch} />) })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    var res = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const launches = await res.json();

    var resUpComing = await fetch('https://api.spacexdata.com/v4/launches/upcoming')
    const upcomingLaunches = await resUpComing.json();
    // console.log(launches)
    return {
        props: {
            launches, upcomingLaunches
        },
    }
}

export default spacex

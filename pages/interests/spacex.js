import React from 'react'
import styles from '../../styles/Spacex.module.css'
import RandImage from '../../components/RandImage'
import SpacexCard from '../../components/SpacexCard'

const spacex = ({ launches, upcomingLaunches }) => {
    // console.log(upcomingLaunches)
    var date = new Date(launches.date_utc)
    var mapedUpComing = upcomingLaunches.map(launch => {
        var today = new Date();
        var upcomingDate = new Date(launch.date_utc)

        var Difference_In_Time = upcomingDate.getTime() - today.getTime();

        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        var patch;
        if (launch.links.patch.small === null) {
            patch = "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
        } else {
            patch = launch.links.patch.small
        }
        return {
            id: launch.id,
            cover_image: patch,
            title: launch.name,
            daysTillLaunch: Math.floor(Difference_In_Days)
        }
    }).sort(function (a, b) {
        return a.daysTillLaunch - b.daysTillLaunch;
      })
    console.log(mapedUpComing)
    return (
        <div className={styles.container}>
            <div className={styles.latest}>
                <h2 className="text-4xl my-5">Latest Launch</h2>
                <h3 className="text-3xl my-5">{launches.name}</h3>
                <div className={styles.latestInner}>
                    <div className={styles.patch}>
                        <img src={launches.links.patch.small} />
                    </div>
                    <div className={styles.images}>
                        <RandImage images={launches.links.flickr.original} />
                    </div>
                    <div className={styles.launchInfo}>
                        <h3 className={styles.title} className="text-3xl">Launch Date: </h3>
                        <p className={styles.info}>{date.toString()}</p>
                        <h3 className={styles.title} className="text-3xl">Details: </h3>
                        <p className={styles.info}>{launches.details}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mt-8 text-4xl">Upcoming Launches</h2>
                <div className={styles.upcoming}>
                    {mapedUpComing.map((launch, index) => { return (<SpacexCard key={index} document={launch} />) })}
                </div>
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

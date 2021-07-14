import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link'

const about = () => {

    return (
        <>
            <h1>About Me</h1>
            <div className={styles.bio}>
                <h2>Bio</h2>
                <p>Cameron Thompson is currently a Software Engineering Student at Brigham Young University Idaho. Cameron also works at the University in the Information Technology department as a Student Software Developer working in the Microsoft Stack in the .NetCore and ASP.Net technologies. Cameron is proficient in Node.js, React, MongoDb, and is currently working on learning the JAM Stack.</p>
                <p>Cameron grew up in Arizona before heading to college in Idaho. Cameron enjoys many recreational activities such as golf, ultimate frisbee, and shooting skeet. Cameron also has several interests in SpaceX, Arduino, and 3D Printing.</p>
            </div>
            <div className={styles.interests}>
                <h2>Interests</h2>
                <h3>Click to learn more!</h3>
                <div className={styles.interestContainer}>
                    <Link href="/construction">
                        <div className={styles.interest}>
                            <div className={styles.interestImageSpaceX}></div>
                            <h3>SpaceX</h3>
                        </div>
                    </Link>
                    <Link href="/construction">
                        <div className={styles.interest}>
                            <div className={styles.interestImageArduino}></div>
                            <h3>Arduino</h3>
                        </div>
                    </Link>
                    <Link href="/construction">
                        <div className={styles.interest}>
                            <div className={styles.interestImagePrinting}></div>
                            <h3>3D Printing</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default about

import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link'

const about = () => {

    return (
        <>
            <h1>About Me</h1>
            <div className={styles.bio}>
                <h2>Bio</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore natus aliquam facilis accusamus distinctio animi, ut ipsum harum ea tempora iste, similique neque nostrum temporibus rerum ex quam repellendus nemo!</p>
            </div>
            <div className={styles.interests}>
                <h2 >Interests</h2>
                <div className={styles.interestContainer}>
                    <Link href="/spacex">
                        <div className={styles.interest}>
                            <div className={styles.interestImageSpaceX}></div>
                            <h3>SpaceX</h3>
                        </div>
                    </Link>
                    <Link href="/spacex">
                        <div className={styles.interest}>
                            <div className={styles.interestImageArduino}></div>
                            <h3>Arduino</h3>
                        </div>
                    </Link>
                    <Link href="/spacex">
                        <div className={styles.interest}>
                            <div className={styles.interestImagePrinting}></div>
                            <h3>3D Printing</h3>
                        </div>
                    </Link>
                    <Link href="/spacex">
                        <div className={styles.interest}>
                            <div className={styles.interestImageGolf}></div>
                            <h3>Golf</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default about

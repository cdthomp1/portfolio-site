import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({ document }) => {
    const launchLink = `/interests/spacex/${document.id}`
    return (

        <div className="w-60 h-72 flex flex-col items-center justify-around mx-auto bg-white rounded-md filter drop-shadow-greenDrop">
            <div className="w-32 h-28 mx-auto p-1">
                <img className=" inline object-scale-down" src={document.cover_image} />
            </div>
            <h2 className="mx-auto font-bold text-black">{document.title}</h2>
            <p className="text-black">Days Till Launch: {document.daysTillLaunch}</p>
            <div className="mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop">
                <Link className="" href={launchLink} >Learn More</Link>
            </div>
        </div>

    )
}

export default Card
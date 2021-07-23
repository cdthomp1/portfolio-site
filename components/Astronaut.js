import React from 'react'
import 'tailwindcss/tailwind.css'


const Astronaut = ({ astronaut }) => {
    return (
        <div className="m-2 lg:w-96 md:w-72 ms:w-40 bg-white flex flex-col items-center">
            <h3 className="text-black text-3xl"><a href={astronaut.wikipedia} target="_blank" rel="noreferrer noopener">{astronaut.name}</a></h3>
            <div className="w-56">
                <img className="" src={astronaut.image} />

            </div>
            <p className="text-black">Agency: {astronaut.agency}</p>
            <p className="text-black">Status: {astronaut.status}</p>
            
        </div>
    )
}

export default Astronaut

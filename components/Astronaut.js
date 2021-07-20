import React from 'react'

const Astronaut = ({ astronaut }) => {
    return (
        <div className="m-2 w-96 bg-white flex flex-col items-center">
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

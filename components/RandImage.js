import React from 'react'

const RandImage = ({images}) => {
    // Get a random image
    var randIndex = Math.floor(Math.random() * images.length)
    return (
        <div>
            <img className="inline object-contain"  src={images[randIndex]} />
        </div>
    )
}

export default RandImage

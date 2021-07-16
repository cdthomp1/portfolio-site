import React from 'react'

const RanImage = ({images}) => {
    // Get a random image
    var randIndex = Math.floor(Math.random() * images.length)
    console.log(randIndex)
    console.log(images.length)
    return (
        <div>
            <img  src={images[randIndex]} />
        </div>
    )
}

export default RanImage

import React from 'react'

const spacex = () => {
    return (
        <div>
            spacex
        </div>
    )
}

/* export async function getServerSideProps(context) {
    var res = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const launches = await res.json();
    console.log(launches)
    return {
        props: {
            launches,
        },
    }
} */  

export default spacex

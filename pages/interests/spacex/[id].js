import React from 'react'
import Astronaut from '../../../components/Astronaut'
import RandImage from '../../../components/RandImage'

const LaunchInfo = ({ launch, astronauts }) => {
    console.log(astronauts)
    const details = launch.details ? launch.details : "More info to come!"
    const wiki = launch.links.wikipedia ? launch.links.wikipedia : "No Wiki yet! 😕"

    return (
        <div className="flex flex-col items-center w-9/12 mx-auto my-5">
            <h2 className="block text-4xl my-5">SpaceX Launch Info</h2>
            <h3 className="text-4xl my-5"><a href={wiki} target="_blank" rel="noreferrer noopener">{launch.name}</a></h3>
            <img className="w-80" src={launch.links.patch.small} />
            <p className="xl:w-5/12 xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-10/12 mx-auto my-5">{details}</p>
            {astronauts.length > 0 ?
                (<div className="flex flex-col items-center my-5">
                    <h3 className="lg:4xl md:text-3xl  sm:text-xl">Let's Meet the Astronauts!</h3>
                    <div>
                        {astronauts.map((a, index) => { return (<Astronaut key={index} astronaut={a} />) })}
                    </div>
                </div>) : <></>
            }
        </div>
    )
}

export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/launches/' + id);
    const launch = await res.json();
    // console.log(launch)

    var astronautIds = launch.crew
    var promiseAstro = astronautIds.map(async (id) => {
        var res = await fetch('https://api.spacexdata.com/v4/crew/' + id);
        const astronaut = await res.json();
        return astronaut;
    })


    var astronauts = await Promise.all(promiseAstro).then(as => {
        return as.map(a => {
            return a
        })
    })

    return {
        props: {
            launch, astronauts
        },
    }
}

export default LaunchInfo

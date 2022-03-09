import React from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'


const about = () => {

    return (
        <>
            <h1 className="text-5xl m-3">About Me</h1>
            <h2 className="text-3xl m-3">Biography</h2>
            <div className="text-white sm:w-8/12 m-3 md:w-7/12 l:w-7/12 xl:w-7/12 1xl:w-7/12 2xl:w-3/12 mx-auto">
                <p className="m-3">Cameron Thompson is currently a Software Engineering Student at Brigham Young University Idaho. Cameron currently works at Stukent as a Software Engineer. Cameron is proficient in Node.js, React, MongoDb, and is currently working on learning the JAM Stack.</p>
                <p className="m-3">Cameron grew up in Arizona before heading to college in Idaho. Cameron enjoys many recreational activities such as golf, ultimate frisbee, fishing, and shooting skeet. Cameron also has several interests in SpaceX, Arduino, and 3D Printing.</p>
            </div>
            <h2 className="text-2xl m-6">Click to learn more!</h2>
            <div className="xl:w-7/12 lg:w-10/12 sm:w-10/12  mx-auto flex lg:flex-row flex-col items-center justify-around">
                <Link href="/interests/spacex">
                    <div className="cursor-pointer w-60 h-72 flex flex-col items-center justify-around bg-white m-5 rounded-md filter drop-shadow-greenDrop">
                        <div className="w-32 h-28 mx-auto p-1">
                            <img className=" inline object-scale-down" src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg" />
                        </div>
                        <h2 className="mx-auto font-bold text-black text-3xl">SpaceX</h2>
                    </div>
                </Link>
                <Link href="/interests/arduino">
                    <div className="cursor-pointer w-60 h-72 flex flex-col items-center justify-around bg-white m-5 rounded-md filter drop-shadow-greenDrop">
                        <div className="w-32 h-28 mx-auto p-1">
                            <img className="inline object-scale-down" src="./images/arduino.png" />
                        </div>
                        <h2 className="mx-auto font-bold text-black text-3xl">Arduino</h2>
                    </div>
                </Link>
                <Link href="/construction">
                    <div className="cursor-pointer w-60 h-72 flex flex-col items-center justify-around bg-white m-5 rounded-md filter drop-shadow-greenDrop">
                        <div className="w-32 h-28 mx-auto p-1">
                            <img className="inline object-scale-down" src="./images/3dprinter.png" />
                        </div>
                        <h2 className="mx-auto font-bold text-black text-3xl">3D Printing</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default about

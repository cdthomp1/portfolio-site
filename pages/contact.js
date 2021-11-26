import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'



const contact = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-evenly h-70v">
                <h1 className="text-5xl">Hello There!</h1>
                <div>
                    <p>If you would like to get intouch, please email me at <a className="text-blue-500" href="mailto:camthomp96@gmail.com">camthomp96@gmail.com</a>!</p>
                    <p>You may also see what I am up to on Twitter, <a className="text-blue-500" href="https://twitter.com/DeveloperCam" target="_blank"
                        rel="noopener noreferrer">@DeveloperCam</a>!</p>
                </div>
            </div>
        </>
    )
}

export default contact

import Link from 'next/link'
import React from 'react'

const construction = () => {
    return (
        <div className="h-full">
            <h1 className="sm:text-5xl">🚧 Please hold tight! 🚧</h1>
            <h2 className="text-3xl m-8 mb-16">🚀 Something great is coming! 🚀</h2>
            <div className="heroLink mx-auto cursor-pointer">
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}

export default construction

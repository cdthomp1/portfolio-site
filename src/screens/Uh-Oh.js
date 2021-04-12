import React from 'react'
import Navigation from '../components/Navigation'

const UhOh = () => {
    return (
        <div>
            <Navigation />
            <h1>Uh Oh!</h1>
            <h2>There is Nothing Here!</h2>
            <div className="return-home">
                <a href="/">Return Home</a>
            </div>
        </div>
    )
}

export default UhOh

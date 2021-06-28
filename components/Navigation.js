import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (

        <div className="header">
            <div className="navbar">
                <div className="logo"><a href="/"><img src="/images/Dev.png" alt="Logo" /></a></div>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">

                    <div><Link href="/"><a>Home</a></Link></div>
                    <div><Link href="/articles"><a>Articles</a></Link></div>
                    <div className="dropdown"><Link href="/projects"><a>Projects</a></Link>
                        <div className="dropdown-content"><Link href="/100days"><a>100 Days of Code</a></Link></div></div>

                    <div><Link href="/about"><a>About</a></Link></div>
                    <div><Link href="/contact"><a>Contact</a></Link></div>

                </nav>
            </div>
        </div>
    )
}

export default Navigation
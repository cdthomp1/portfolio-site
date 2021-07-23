import Link from 'next/link'

import React from 'react'

const Navigation = () => {
    return (


        <div className="nav">
            <div className="navbar">
                <Link href="/">
                    <div className="logoContainer cursor-pointer">
                        <img src="/images/Dev.png" />
                        <p>Cameron<br /> Thompson</p>
                    </div>
                </Link>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">
                    <ul>
                        <li className="menuItem"><Link href="/">Home</Link></li>
                        <li className="menuItem"><Link href="/about">About Me</Link></li>
                        <li className="menuItem"><Link href="/articles">Articles</Link></li>
                        <li className="menuItem"><Link href="/projects">Projects</Link></li>
                        <li className="menuItem"><Link href="/construction">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navigation
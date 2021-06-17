import React from 'react'
import '../styles/nav.css'

const Navigation = () => {
    return (

        <div className="header">
            <div className="navbar">
                <div className="logo"><a href="/"><img src="/images/Dev.png" alt="Logo"/></a></div>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/100Days">100 Days of Code</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navigation

import React from 'react'

const Navigation = () => {
    return (
        <>
            <div className="nav-wrapper">
                <a href="/">
                    <div className="dots-wrapper">
                        <div id="dot-1" className="browser-dot"></div>
                        <div id="dot-2" className="browser-dot"></div>
                        <div id="dot-3" className="browser-dot"></div>
                    </div>
                </a>

                <ul id="navigation">
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/contact">Contact</a></li>

                </ul>
            </div>
        </>
    )
}

export default Navigation

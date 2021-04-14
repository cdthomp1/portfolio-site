import React from 'react'

const Navigation = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div>
                    <a href="/"><img className="logo" src="/images/Dev.png" alt="Logo" /></a>
                </div>

                <div id="navigation">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/articles">Articles</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

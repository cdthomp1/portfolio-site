import React from 'react'

const FooterScreen = () => {
    return (
        <>
            <footer>
                <img id="footerImg" alt="logo" src="/images/Dev.png" />
                <p>&copy; Cameron Thompson 2021</p>
                <ul className="footerLinks">
                    <li><a href="https://www.linkedin.com/in/cameron-thompson96/" target="_blank"
                        rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/cdthomp1" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://twitter.com/DeveloperCam" target="_blank"
                        rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </footer>
        </>
    )
}

export default FooterScreen

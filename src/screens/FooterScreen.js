import React from 'react'

const FooterScreen = () => {
    return (
        <>
            <footer>
                <img id="footerImg" alt="logo" src="./images/Dev.png" />
                <ul className="footerLinks">
                    <li><a href="https://www.linkedin.com/in/cameron-thompson96/" target="_blank"
                        rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/cdthomp1" target="_blank" rel="noopener noreferrer">Github</a></li>

                    <li><a href="/contact">Contact</a></li>
                </ul>
            </footer>
        </>
    )
}

export default FooterScreen

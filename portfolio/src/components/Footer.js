import React from 'react'
import logo from '../images/Dev.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <img id="footerImg" alt="logo" src={logo} />
                <ul className="footerLinks">
                    <li><a href="https://www.linkedin.com/in/cameron-thompson96/" target="_blank"
                        rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/cdthomp1" target="_blank" rel="noopener noreferrer">Github</a></li>

                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer

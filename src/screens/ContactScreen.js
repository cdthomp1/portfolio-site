import React from 'react';
// import Prism from "prismjs";
import '../styles/prism.css';

import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
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

                </ul>
            </div>


            <section className="s2">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                    <h5 style={{ textAlign: "center" }}>Send me a message here or get my npm card!</h5>
                    <div className="npm-card">
                        <pre><code className="language-powershell" id="npx" >npx cameronthompson</code></pre>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactScreen;

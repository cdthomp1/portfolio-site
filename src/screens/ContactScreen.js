import React from 'react';
import Prism from "prismjs";
import '../styles/prism.css';

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
                    <a href=""></a>
                    <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                    <h5 style={{ textAlign: "center" }}>Send me a message here or get my npm card!</h5>
                    <div className="npm-card">
                        <pre><code className="language-powershell" id="npx" >npx cameronthompson</code></pre>
                    </div>

                    <form id="contact-form" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <a name="contact"></a>
                        <label className="honeypt">Don't fill this out if you're human: <input className="honeypt" name="bot-field" /></label>
                        <label>Name</label>
                        <input className="input-field" type="text" name="name" required />

                        <label>Subject</label>
                        <input className="input-field" type="text" name="subject" required />

                        <label>Email</label>
                        <input className="input-field" type="text" name="email" required />

                        <label>Message</label>
                        <textarea className="input-field" name="message" required></textarea>

                        <input id="submit-btn" type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactScreen;

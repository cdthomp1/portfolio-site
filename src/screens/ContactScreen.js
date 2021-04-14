import React from 'react';
import Prism from "prismjs";
import '../styles/prism.css';

import ContactForm from "../components/ContactForm";



const ContactScreen = () => {
    Prism.highlightAll();

    const copyClick = () => {

        var copyText = 'npx cameronthompson';
        navigator.clipboard.writeText(copyText);
        document.getElementById("copy-notice").innerText = "Copied!"
        setTimeout(function () { document.getElementById("copy-notice").innerText = "Click to Copy!" }, 3000);
    }

    return (
        <>
            
            <section className="s2">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
                    <h5 style={{ textAlign: "center" }}>Send me a message here or get my npm card!</h5>
                    <div className="npm-card" onClick={copyClick}>
                        <pre><code className="language-powershell" id="npx" >npx cameronthompson</code></pre>
                        <p className="copy-notice" id="copy-notice">Click to Copy!</p>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactScreen;

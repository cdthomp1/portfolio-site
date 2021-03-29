import React from 'react';
import '../styles/success.css';

const SuccessScreen = () => {
    return (
        <>
            <div class="main-container">
                <div class="greeting-wrapper">
                    <h1>Message Sent!</h1>
                </div>


                <div class="contact window-card">
                    <div class="nav-wrapper">
                        <a href="/">
                            <div class="dots-wrapper">
                                <div id="dot-1" class="browser-dot"></div>
                                <div id="dot-2" class="browser-dot"></div>
                                <div id="dot-3" class="browser-dot"></div>
                            </div>
                        </a>
                        <ul id="navigation">
                            <li><a href="/">Back</a></li>
                        </ul>
                    </div>

                    <div id="success" class="whole-span">
                        <h3>Thanks for your message, I will get back with you soon! :)</h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuccessScreen

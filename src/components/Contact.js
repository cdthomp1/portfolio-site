import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

class ContactForm extends Component {

    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/success');
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitForm.bind(this)} id="contact-form" name="contact" method="POST" >
                    
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
            </>
        );
    }
}

export default withRouter(ContactForm);
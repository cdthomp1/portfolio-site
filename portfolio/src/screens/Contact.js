import React from 'react';
import logo from '../images/Dev.png';
import {Link} from 'react-router-dom';

import '../App.css';

const Contact = () => {
    return (
        <div id="content">
            <header>
                <Link to="/"><img id="logo" alt="img" src={logo} /></Link>
                <h1>Cameron Thompson</h1>
                <h2>Student | Student Software Developer | Thinker</h2>
            </header>
            <article>
                <h2>Want to work Together? Let me know below!</h2>
                <section>
                    <form name="contact" action="/formSuccess" method="POST" data-netlify="true">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="3" placeholder="Hello there..."></textarea>
                        </div>
                        <button type="submit" className="button" id="submit">Submit</button>
                    </form>
                </section>
            </article>
            

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
            </script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
            </script>
        </div>


    )
}

export default Contact

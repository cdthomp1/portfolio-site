import React from 'react'
import logo from '../images/Dev.png';
import menTemplate from '../images/men-template.png';
import socialFood from '../images/social-food.png';
import githubFinder from '../images/react-github.png';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div id="content">
            <header>
                <Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
                <h1>Cameron Thompson</h1>
                <h2>Student in Software Engineering</h2>
            </header>

            <article>
                <section>
                    <p>A student of Software Engineering. I work hard both in my classes and at my job as a Student Software
                    Developer to learn what it takes to be a web developer. I have learned HTML, CSS, JavaScript and I
                    am very proficient in them. I am learning
                    React to increase my abilities as a web developer. I love to take challenging ideas and transform
                them into beautiful creations.</p>
                    <p>When I'm not coding or doing homework, you'll find me with family, playing Ultimate Frisbee or
                practicing my short game on the Golf course.</p>
                </section>
                <br />
                <section id="projects">
                    <h2>My Most Up to Date Projects</h2>
                    <div className="container">
                        <div className="project-card">
                            <img className="project-img" alt="Header" src={menTemplate} />
                            <div className="header">
                                <h2>Mongo Express Node Template</h2>
                            </div>
                            <div className="colorband"></div>
                            <div className="desc">This template is designed to help kick start Node.js applications that would
                        use MongoDB as a database and Passport.js as an authentication middleware.</div>
                            <div className="actions">
                                <a href="https://github.com/cdthomp1/mongo-express-node-template" target="_blank"
                                    rel="noopener noreferrer">
                                    <button>
                                        <span>
                                            <i className="fab fa-github-alt"></i>&nbsp;
                                    <span>
                                                Repo Link
                                    </span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img className="project-img" alt="Header" src={socialFood} />
                            <div className="header">
                                <h2>Social Food</h2>
                            </div>
                            <div className="colorband"></div>
                            <div className="desc">This website is for users to upload their favorite recipes. This will allow
                            anyone to see the recipe. This eliminates the need for the many long blogs on most recipe
                        sites. More to come!</div>
                            <div className="actions">
                                <a href="https://fathomless-wildwood-53985.herokuapp.com/" target="_blank"
                                    rel="noopener noreferrer">
                                    <button>
                                        <span>
                                            <i className="far fa-window-restore"></i>&nbsp;
                        <span>
                                                Live Site
                                    </span>
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/cdthomp1/social-food" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        <span>
                                            <i className="fab fa-github-alt"></i>&nbsp;
                        <span>
                                                Repo Link
                                    </span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img className="project-img" alt="Header" src={githubFinder} />
                            <div className="header">
                                <h2>React Github Finder</h2>
                            </div>
                            <div className="colorband"></div>
                            <div className="desc">A simple react app that uses the github api to search for users. Each user
                        gets a card and clicking on the card opens a details page for that user.</div>
                            <div className="actions">
                                <a href="https://github-finder.cameronthompson.io/" target="_blank"
                                    rel="noopener noreferrer">
                                    <button>
                                        <span>
                                            <i className="far fa-window-restore"></i>&nbsp;
                        <span>
                                                Live Site
                                    </span>
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/cdthomp1/react-github-finder" target="_blank"
                                    rel="noopener noreferrer">
                                    <button>
                                        <span>
                                            <i className="fab fa-github-alt"></i>&nbsp;
                        <span>
                                                Repo Link
                                    </span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

Home.propTypes = {

}

export default Home

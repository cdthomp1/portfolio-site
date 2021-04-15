import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectAction.js';
import { listArticles } from '../actions/articlesAction.js';

import ProjectCard from "../components/ProjectCard.js";
import ArticleCard from "../components/ArticleCard.js"


const HomeScreen = () => {
    const dispatch = useDispatch();
    const articleDispatch = useDispatch();
    const projectList = useSelector(state => state.projectList);
    const { projects } = projectList;

    const articlesList = useSelector(state => state.articleList);
    const { articles } = articlesList;

    console.log(articles)
    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch]);

    useEffect(() => {
        articleDispatch(listArticles());
    }, [articleDispatch])
    return (
        <div>
            <section className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                        <h1>Hi, I'm Cameron Thompson</h1>
                    </div>
                    <div className="intro-wrapper">
                        

                        <div className="left-column">
                            <img id="profile_pic" alt='Cameron Thompson' src="./images/thompsonCameron.jpg" />
                        </div>

                        <div className="right-column">
                            <div id="preview">
                                <h3>What I Do</h3>
                                <p>I am a student of Software Engineering with an emphasis in Web Development! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="s2">
                <div className="main-container">
                    <div className="about-wrapper">
                        <div className="about-me">
                            <h4>More about me</h4>
                            <p>I work hard to learn new technologies but I found a few to stick to!</p>
                            <hr />
                            <h4>Top Technologies</h4>
                            <p>Fullstack developer with primary focus on Node + React: <a target="_blank"
                                href="./assets/resume.pdf">Download Resume</a></p>
                            <div id="skills">
                                <div>JavaScript</div>
                                <div>Node.js</div>
                                <div>React</div>
                                <div>MongoDB</div>
                                <div>Express.js</div>
                                <div>Heroku</div>
                                <div>Netlify</div>
                                <div>HTML/CSS</div>
                                <div>JAM Stack (Learning)</div>
                                <div>Serverless (Learning)</div>
                            </div>
                        </div>
                        <div className="social-links">
                            <img id="social_img" alt="MERN Stack" src="./images/mern.jpg" />
                            <h3>My Main Focus: <br />The MERN Stack</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="s1">
                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Some of my latest projects</h3>
                    <div className="post-wrapper" id="projects">
                        {projects.slice(0, 3).map(project => {
                            console.log(project._id);
                            return <ProjectCard key={project._id} project={project} />
                        }
                        )}
                    </div>
                    <div className="more-button">
                        <a href="/projects">See More</a>
                    </div>
                </div>


                <div className="main-container">
                    <h3 style={{ textAlign: "center" }}>Some of my latest articles</h3>
                    <div className="post-wrapper" id="articles">
                        {articles.slice(0, 3).map(article => {
                            if (article.cover_image !== null) {
                                return <ArticleCard key={article._id} article={article} />
                            } else {
                                return <></>
                            }
                        }
                        )}
                    </div>
                    <div id="bottom-button" className="more-button">
                        <a href="/articles">See More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen

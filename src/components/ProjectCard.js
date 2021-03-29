import React /* { useState, useEffect }  */ from 'react'
/* import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' */


const ProjectCard = ({ project }) => {
    return (
        <div>
            <div className="wrapper">
                <div className="dots-wrapper card-header">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                </div>
                <div className="post">
                    <img className="thumbnail" src={project.image} alt="Cover" />
                    <div className="post-preview">
                        <h6 className="post-title">{project.title}</h6>
                        <p className="post-intro">{project.description}</p>
                        <div className="link-container">
                            <a className="read-more" rel="noreferrer" target="_blank"
                                href={project.repoLink}>Repo
							Link</a>
                            <a className="read-more" rel="noreferrer" target="_blank"
                                href={project.liveLink}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

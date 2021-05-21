const ProjectCard = ({ project }) => {
    let liveLink;
    if (project.liveLink) {
        liveLink = <a className="read-more" rel="noreferrer" target="_blank"
            href={project.liveLink}>Live Site</a>
    } else {
        liveLink = <></>
    }

    return (
        <div>
            <div className="wrapper">
                <div className="post">
                    <img className="thumbnail" src={project.image} alt="Cover" />
                    <div className="post-preview">
                        <h6 className="post-title">{project.title}</h6>
                        <p className="post-intro">{project.description}</p>
                        <div className="link-container">
                            <a className="read-more" rel="noreferrer" target="_blank"
                                href={project.repoLink}>Repo
							Link</a>
                            {liveLink}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
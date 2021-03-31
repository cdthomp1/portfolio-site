import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectAction.js';
import ProjectCard from "../components/ProjectCard.js"
import Navigation from '../components/Navigation';

const ProjectsScreen = () => {
    const dispatch = useDispatch();
    const projectList = useSelector(state => state.projectList);
    const { projects } = projectList;


    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch]);

    return (
        <>
            <Navigation />
            <h1>Projects</h1>
            <div class="post-wrapper" id="projects">
                {projects.map(project => {
                    if (project.public && project.title !== `TEST PROJECT`) {
                        return <ProjectCard key={project._id} project={project} />
                    } else {
                        return <></>
                    }
                })}
            </div>


        </>
    )
}

export default ProjectsScreen;

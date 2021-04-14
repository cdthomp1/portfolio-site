import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectAction.js';
import ProjectCard from "../components/ProjectCard.js"
import Loader from "../components/Loader.js";
import UhOh from "../screens/Uh-Oh"

const ProjectsScreen = () => {
    const dispatch = useDispatch();
    const projectList = useSelector(state => state.projectList);
    const { projects, loading, error } = projectList;


    useEffect(() => {
        dispatch(listProjects());
    }, [dispatch]);

    return (
        <>
            
            <h1>Projects</h1>
            <div class="post-wrapper" id="projects">
            { loading ? (
                <Loader />
            ) : error ? (
                <UhOh variant='danger'>{error}</UhOh>
            ) : loading === false && projects !== null ? (
                projects.map(project => {
                    if (project.public && project.title !== `TEST PROJECT`) {
                        return <ProjectCard key={project._id} project={project} />
                    } else {
                        return <></>
                    }
                })
                ) : (<></>)}
            </div>


        </>
    )
}

export default ProjectsScreen;

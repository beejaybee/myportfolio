import React from 'react';
import { useParams } from 'react-router-dom';
//components 
import BreadCrumb from './BreadCrumb';
import ProjectInfo from './ProjectInfo';

//Hooks
import {useOneProjectHooks} from '../hooks/useOneProjectHooks';
import Spinner from './Spinner';

const ShowProject = () => {
    const {projectId} = useParams();
    const projId = Number(projectId)

    const { project, error, loading} = useOneProjectHooks(projId);
    
    if (loading) <Spinner />
    if (error) <div>something went wrong...</div>

    return (
        <>
            <BreadCrumb  projectName={project.title} />
            <ProjectInfo project={project} />
        </>
    )
}
export default ShowProject;
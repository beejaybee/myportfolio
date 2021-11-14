import React from 'react';
import { GlobalStyle } from '../GlobalStyles';

//Hooks
import {useProjectHooks} from '../hooks/useProjectHooks'

//components
import ProjectThumb from '../components/ProjectThumb';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';


const Project = () => {
    const {project,error, loading} = useProjectHooks();
    if(loading) {
        return <Spinner />
    }
    if(error) {
        return (<h1>Something went Wrong</h1>)
    }

    const renderGridChildren = () => (
        project.map(proj => (
            <ProjectThumb
            key={proj.id}
            projectName={proj.title}
            clickable
            imageUrl={proj.image}
            projectId={proj.id}
            />
        ))
    )

    return (
        <>
            <Grid header='Projects'>
                {renderGridChildren()}
            </Grid> 
            <GlobalStyle />
        </>
    )
}

export default Project;
import {useState, useEffect} from 'react';


import { projectData } from '../projectData';

const initialState = {
    id: 0,
    title: '',
    link: '',
    gitLink: '',
    image: '',
    info: ''
}

export const useOneProjectHooks = (projectId) => {
    
    const [project, setProject] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        try{
            setLoading(true);
            setError(false);
            
            
            const oneProject = projectData.filter(proj => proj.id === projectId);   
            
            setProject(...oneProject);

            setLoading(false)
        }catch(error){
            setError(true)
        } 
    }, [projectId]);

    return { project, error, loading }
}
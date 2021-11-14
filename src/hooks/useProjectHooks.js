import {useState, useEffect } from 'react';

//project data
import { projectData } from '../projectData';

export const useProjectHooks = () => {
    const [project, setProject] = useState([]);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        try{
            setError(false);
            setLoading(true);
            setProject([
                ...projectData
            ])

            setLoading(false)
        }catch(error) {
            setError(true)
        }
        
    }, []) 
    return { project, error, loading }
}


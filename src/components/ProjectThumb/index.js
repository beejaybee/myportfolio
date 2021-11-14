import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//styles


import {Wrapper, Image} from './ProjectThumb.styles';


const ProjectThumb = ({projectName, imageUrl, projectId, clickable}) => (
    <Wrapper>
        {
            clickable ? (
                <Link className="no-underline" to={`/${projectId}`} >
                    <Image src={imageUrl} alt='project-image' />
                    <h3>{projectName}</h3>
                </Link>
            ) :
            <>
                <Image src={imageUrl} alt='project-image' />
                <h3>{projectName}</h3>
            </>
        }
    </Wrapper>
);

ProjectThumb.prototypes = {
    projectName: PropTypes.string,
    imageUrl: PropTypes.string,
    ProjectId: PropTypes.number,
    clickable: PropTypes.bool
}

export default ProjectThumb;
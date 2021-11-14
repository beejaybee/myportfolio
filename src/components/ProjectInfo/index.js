import React from 'react';

//styles
import { Wrapper, Content, Text } from './ProjectInfo.styles';

//components
import Thumb from '../Thumb';


const ProjectInfo = ({project}) => (
    <Wrapper>
        <Content>
            <Thumb 
            image={project.image}
            clickable={false}
            />

            <Text>
                <h1>{project.title}</h1>
                <h3>Project Info</h3>
                <p>{project.info}</p>
                <div className="links">
                    <div>
                        <h3>LINK TO PROJECT</h3>
                        <a href={project.link} className="project-link" rel='noreferrer' target='_blank'>{project.link}</a>
                    </div>
                    <div className="github-link">
                        <h3>GITHUB REPOSITORY</h3>
                        <a href={project.gitLink} rel='noreferrer' target='_blank'> {project.gitLink} </a>

                    </div>

                </div>
            </Text> 
        </Content>
    </Wrapper>

)

export default ProjectInfo;
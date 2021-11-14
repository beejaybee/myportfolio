import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

//styles 
import { Wrapper, Content} from './BreadCrumb.styles';

const BreadCrumb = ({projectName}) => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Content>
                <Link to='/' className="no-underline" >
                    <span>Home</span>
                </Link>
                <span className="go-back" onClick={() => navigate(-1)}>Go Back</span>
                <span>|</span>
                <span>{projectName}</span>
            </Content>
        </Wrapper>
    )

}

export default BreadCrumb;
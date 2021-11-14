import React from 'react';
import { Link } from 'react-router-dom'

//styles 
import { Wrapper, Content, LogoImage, Button } from './Header.styles';

//image
import imageLogo from '../../images/beejaylogo.png'

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
            <LogoImage src={imageLogo} alt='my logo' />
            </Link>
            
            <Link to='/projects' className="no-underline" >
                <Button>My Projects</Button>
            </Link>
        </Content>
    </Wrapper>
)

export default Header;
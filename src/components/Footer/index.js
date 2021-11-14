import React from 'react';
import {
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaWhatsapp
} from 'react-icons/fa';

//styles 
import { Wrapper, Content, Text } from './Footer.styles';

const Footer = () => (
    <Wrapper>
        <Content>
            <Text>
                <h1>This Site is built and Developed by Oyewo Bolaji</h1>
                <div className="links" >
                            <a href="https://github.com/beejaybee" rel='noreferrer' target='_blank' >
                                <FaGithub  />
                            </a>
                            <a href="https://twitter.com/Oyewo_BolajiS" rel='noreferrer' target='_blank' >
                                <FaTwitter  />
                            </a>
                            <a href="https://facebook.com/beejaykaos" rel='noreferrer' target='_blank' >
                                <FaFacebook  />
                            </a>
                            <a href="https://wa.me/qr/SGJ4APVQAE7KN1" rel='noreferrer' target='_blank' >
                                <FaWhatsapp  />
                            </a>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default Footer;
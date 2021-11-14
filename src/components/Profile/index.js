import React from 'react';

//react icon 
import {FaFacebook, FaTwitter, FaGithub, FaWhatsapp} from 'react-icons/fa'

//styles 
import {Wrapper, Content, Text} from './Profile.styles';

//components
import Thumb from '../Thumb'
//import Particle from '../Particle';

// image
import beejayImage from '../../images/bj.jpg';


const Profile = () => (
    <Wrapper>
        <Content>
            <Thumb 
            image={beejayImage}
            clickable={false}
            />
            <Text>
                <h1>Hi, I'm Oyewo Bolaji</h1>
                <h3>About Me</h3>
                <p>I am a web developer fluent in HTML5, CSS3, JAVASCRIPT, and JAVASCRIPT frameworks like React.js and node.js</p>
                <p>I am Interested in building interactive and responsive web applications</p>

                <div className="find-me">
                    <div>
                        <h3>You can Find me on</h3>
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
                    </div>
                    
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default Profile
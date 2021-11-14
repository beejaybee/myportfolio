import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


// styles
import { Image } from './Thumb.styles';

const Thumb = ({image, projectId, clickable}) => (
    <div>
        {clickable ? (
        <Link to={`/${projectId}`} >
            <Image src={image} alt='image'/>
        </Link>
        ):
        <Image src={image} alt='picture' />
        }
    </div>
)
Thumb.propTypes = {
    image: PropTypes.string,
    projectId: PropTypes.number,
    clickable: PropTypes.bool
} 
export default Thumb





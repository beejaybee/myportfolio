import styled from 'styled-components';



export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    height: 100%;
    max-height: 600px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10%;
    animation: animateThumb 0.5s;
    :hover {
        opacity: 0.8;
    }
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1
        }
    }


`;
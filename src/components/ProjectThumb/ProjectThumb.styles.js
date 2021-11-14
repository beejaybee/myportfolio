import styled from 'styled-components';


export const Wrapper = styled.div`
    color: var(--white);
    width: 100%;
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    margin: 0 auto;
    text-align: center;

    h3 {
        margin: 10px 0 0 0 0;
        color: var(--white)
    }
    
    .no-underline {
        text-decoration: none;
    }

`;


export const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.3s;
    border-radius: 10px;
    animation: animateProject 0.5s;
    :hover {
        opacity: 0.8
    }
    @keyframes animateProject {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;
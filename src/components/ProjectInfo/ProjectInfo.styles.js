import styled from 'styled-components';

export const Wrapper = styled.div`
background: var(--medGrey);
background-position: center;
background-size: cover;
padding: 40px 20px;
animation: animateProjectInfo 1s;

@keyframes animateProjectInfo {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

`;


export const Content = styled.div`
display: flex;
max-width: var(--maxWidth);
margin: 0 auto;
background: var(--medGrey);
border-radius: 20px;

@media screen and (max-width: 768px) {
    display: block;
    max-height: none;
}

`;



export const Text = styled.div`
width: 100%;
padding: 20px 40px;
color: var(--white);
overflow: hidden;



.links {
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
}

.project-link {
    font-weight: 800px;
    text-decoration: none;
    color: var(--white);
    :hover {
        color: blue;
    }
}

.github-link {
    margin-left: 40px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
    a {
        font-weight: 800px;
        text-decoration: none;
        color: var(--white);
        :hover {
            color: blue;
        }
    }
}

h1 {
    @media screen and (max-width: 768px) {
        font-weight: var(--fontSmall);
    }
}

`;
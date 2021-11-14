import styled from 'styled-components';


export const Wrapper = styled.div`
    background: var(--medGrey);
    background-position: center;
    background-size: cover;
    padding: 40px 20px;
    animation: animateProfile 1s;

    @keyframes animateProfile {
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
    border-radius: 20px;

    @media screen and (max-width: 720px) {
        display: block;
        max-height: none;
    }


`;



export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .find-me {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }

    .links {
        display: flex;
        font-weight: 800px;
        margin: 0 auto;
        justify-content: space-between;

        a {
            color: var(--white);
            font-size: var(--fontBig);
            padding: 0 20px 0 0;

            :hover {
                opacity: 0.8;
            }
        }
    }
    

    h1 {
        @media screen  and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

`;


import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 100vw;
    max-width: var(--maxWidth);
    padding: 20px 40px;
    margin: 0 auto;
    @media screen and (max-width: 1280px) {
        background: var(--medGrey);
    }
    

    h1 {
        color: var(--medGrey);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig)
        }

        @media screen and (max-width: 1280px) {
            color: var(--white);
        }
    }

`;


export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;
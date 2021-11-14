import styled from 'styled-components';


export const Wrapper = styled.div`
background: var(--darkGrey);
padding: 10px;
margin: 0;
text-align: center;
`;

export const Content = styled.div`
    color: var(--white);
    width: 100%;
`;

export const Text = styled.div`
    width: 100%;
    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontMed)
        }
    }
    .links {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        margin: 0 auto;

        a {
            color: var(--white);
            font-size: var(--fontBig);
            
            :hover {
                opacity: 0.8;
            }
        }
    }
`;

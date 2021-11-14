import styled from 'styled-components';



export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;

    .no-underline {
        text-decoration: none;
    }
`;

export const LogoImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    :hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 500px) {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;
export const Button = styled.div`
width: 8%;
color: var(--medGrey);
background: var(--white);
height: 40px;
border-radius: 5px;
outline: none;
border: 0;
min-width: 120px;
font-size: var(--fontBig);
cursor: pointer;
margin: 20px auto;
text-align: center;
transition: all 0.3s;
font-weight: 800px;

:hover {
    color: var(--white);
    background: var(--medGrey);
    opacity: 0.8;
}

`;

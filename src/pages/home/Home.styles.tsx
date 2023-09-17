import styled from 'styled-components';

export const HomePage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        padding: 1rem;
        font-weight: 700;
        font-size: 3em;
        background-color: #03619f;
        color: white;
    }

    /* @media (max-width: 769px) {
        flex-direction: column;
        width: 100vw;
    }
    @media (min-width: 769px) {
        padding: 15px 50px;
        width: 100vw;
    }
    @media (min-width: 1440px) {
        width: 60vw;
    } */
`;

import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #dff2ff;

    h2 {
        font-size: 3em;
        text-align: center;
        color: #03619f;
        font-weight: 700;
        padding-top: 2rem;
        @media (max-width: 769px) {
            padding-bottom: 2rem;
        }
    }
`;

export const ShavimLogo = styled.h1`
    padding: 0rem 1rem 0.5rem 1rem;
    font-weight: 700;
    font-size: 3em;
    background-color: #03619f;
    color: white;
    border-radius: 15px;
`;

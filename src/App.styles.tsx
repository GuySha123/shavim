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

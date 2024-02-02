import styled from 'styled-components';

export const WelcomeContainer = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    background-color: #0d609b;

    h1 {
        position: absolute;
        z-index: 1001;
        top: 125px;
        font-weight: 800;
        font-style: italic;
        @media (max-width: 769px) {
            top: 75px;
        }
    }

    h2 {
        position: absolute;
        z-index: 1001;
        top: 250px;
        color: white;
        background-color: #0d609bb0;
        border-radius: 15px;
        padding: 5px;
        @media (max-width: 769px) {
            top: 200px;
        }
    }
`;

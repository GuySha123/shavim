import styled from 'styled-components';

export const NotFoundPage = styled.div`
    background-color: #dff2ff;
    color: #03619f;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const MessegeContainer = styled.div`
    background-color: #8cd7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem;
    border-radius: 15px;
    @media (max-width: 769px) {
        width: 21rem;
        height: 15rem;
        h2 {
            margin: 5px 0px 15px 0px;
        }
    }
    @media (min-width: 769px) {
        width: 35rem;
        height: 20rem;
        h2 {
            margin: 20px 0px 30px 0px;
        }
    }
`;

export const DirectBackToHomePage = styled.button`
    background-color: #dff2ff;
    color: #03619f;
    font-weight: 500;
    padding: 15px;
    border-radius: 15px;
    font-size: 1.3em;
    transition: background-color 0.3s, transform 0.1s;

    &:hover {
        background-color: #d5edfc;
        transform: translateY(2px);
    }
`;

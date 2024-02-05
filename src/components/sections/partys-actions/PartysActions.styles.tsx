import styled from 'styled-components';
import exampleOne from '../../../assets/photos/other/example-1.jpg';

export const PartysActionsContainer = styled.div`
    width: 100%;
    padding: 15px;
`;
export const PartysActionsTitleContainer = styled.div`
    display: flex;
`;

export const ActionsTitleHeadingTwo = styled.h2`
    width: 150px;
    font-size: 3em;
    padding: 0.8rem;
    text-align: center;
    font-weight: 800;

    @media (max-width: 320px) {
        font-size: 1.5em;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 2.5em;
    }
`;

export const ActionsContent = styled.div`
    justify-content: center;
    align-items: center;
    margin: 30px 20vw;

    @media (max-width: 320px) {
        margin: 0;
    }

    @media (min-width: 321px) and (max-width: 1025px) {
        margin: 0;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        margin: 30px 10vw;
    }
`;

export const ActionsPictures = styled.div`
    background-image: url(${exampleOne});
    width: 100%;
    min-height: 550px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain, cover;

    @media (max-width: 320px) {
        margin: 0;
        padding: 0;
        min-height: 150px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        min-height: 250px;
    }

    @media (max-width: 1025px) {
        background-size: cover;
        width: 100%;
    }

    @media (min-width: 1026px) and (max-width: 1280px) {
    }
`;

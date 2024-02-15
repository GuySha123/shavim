import styled from 'styled-components';

export const PartysActionsContainer = styled.div`
    color: #03619f;
    width: 100%;
    padding: 15px;

    @media (max-width: 1025px) {
        padding: 10px;
        h2 {
            font-size: 2em;
        }
    }
`;
export const PartysActionsTitleContainer = styled.div`
    display: flex;
    margin: 0 15vw;
    @media (max-width: 1025px) {
        justify-content: center;
        margin: 0;
    }
`;

export const ActionsTitleHeadingTwo = styled.h2`
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

    h3 {
        font-size: 2em;
        font-weight: 700;
        margin: 30px 0 20px 0;
    }

    @media (max-width: 320px) {
        margin: 0;
    }

    @media (min-width: 321px) and (max-width: 1025px) {
        margin: 40px 0;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        margin: 30px 10vw;
    }
`;

export const ActionsPictures = styled.div<{ $image: string }>`
    background-image: url(${(props) => props.$image});
    width: 100%;
    min-height: 550px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;

    @media (max-width: 320px) {
        margin: 0;
        padding: 0;
        min-height: 150px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        min-height: 250px;
    }

    @media (max-width: 1025px) {
        width: 100%;
    }

    @media (min-width: 1026px) and (max-width: 1280px) {
    }
`;

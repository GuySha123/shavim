import styled from 'styled-components';

export const IntroductionContainer = styled.div`
    height: 100vh;
`;

export const Test = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const VisionContainer = styled.div`
    display: grid;
    background-color: #03619f;
    grid-template-columns: auto auto auto;
    border-radius: 15px;
    min-width: 70vw;
    padding: 0.938rem 2rem;
    font-size: 2.5em;
    gap: 15px;

    @media (max-width: 480px) {
        font-size: 1.6em;
    }
`;

export const VisionContent = styled.div`
    padding: 0.938rem 2rem;
    color: #fff300;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        width: 1px;
        background-color: #ffffff;
        height: 70%;
        position: absolute;
        right: 0;
        top: 25%;
    }

    &:nth-child(1),
    &:nth-child(4) {
        &::after {
            display: none;
        }
    }

    @media (max-width: 480px) {
        padding: 0.6rem 0;
        margin: 0;

        &::after {
            right: -10%;
            top: 25%;
        }
    }
`;

export const HeadPartyWordsContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeadPartyWordsContent = styled.div`
    max-width: 80vw;
    text-align: justify;
    padding: 15px;

    @media (max-width: 480px) {
        max-width: 100vw;
    }
`;

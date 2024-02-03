import styled from 'styled-components';

export const HeadPartyWordsContentContainer = styled.div`
    width: 100%;

    padding: 15px;
    color: #03619f;

    @media (max-width: 480px) {
        max-width: 100vw;
    }
`;

export const ValueInfo = styled.div`
    margin: 30px 20vw;

    @media (max-width: 769px) {
        margin: 50px 1.1vw;
    }

    @media (min-width: 770px) and (max-width: 1025px) {
        margin: 30px 100px;
    }

    @media (min-width: 1026px) and (max-width: 1280px) {
        margin: 30px 15vw;
    }
`;

export const PartysValueContainer = styled.div`
    display: flex;
`;

export const ValueHeading = styled.h2`
    width: 150px;
    padding: 0.8rem;
    text-align: center;
    font-size: 3em;
    font-weight: 800;

    @media (max-width: 320px) {
        font-size: 1.5em;
    }
    @media (min-width: 321px) and (max-width: 480px) {
        font-size: 2.5em;
    }
`;

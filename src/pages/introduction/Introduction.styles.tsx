import styled from 'styled-components';

export const VisionContainer = styled.div`
    display: grid;
    background-color: #03619f;
    grid-template-columns: auto auto auto;
    padding: 0.938rem 2rem;
    font-size: 2.5em;
    gap: 15px;
`;

export const VisionContent = styled.div`
    background-color: #03619f;
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
        padding: 0; /* Adjust padding for smaller screens */
        /* Other adjustments for smaller screens */
    }
`;

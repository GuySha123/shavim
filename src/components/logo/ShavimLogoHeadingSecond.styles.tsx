import styled from 'styled-components';

export const LogoHeadingSecond = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 9.375rem;
    font-size: 3em;
    font-weight: 800;
    background-color: #0d609b;
    color: white;
    font-style: italic;

    @media (max-width: 320px) {
        font-size: 2em;
        min-width: 7.375rem;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 2.5em;
    }
`;

import styled from 'styled-components';

export const HomePage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;

    h1 {
        position: absolute;
        z-index: 1001;
        top: 125px;
    }

    h2 {
        position: absolute;
        z-index: 1001;
        top: 265px;
    }
`;

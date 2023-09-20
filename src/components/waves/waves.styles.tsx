import styled, { keyframes } from 'styled-components';

export const StyledWaveContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    bottom: 0;
    overflow: hidden;
`;

export const StyledWave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #3498db 0%, #2980b9 100%);
    animation: wave 2s linear infinite;

    &:nth-child(2) {
        background: linear-gradient(to bottom, #e74c3c 0%, #c0392b 100%);
        animation-delay: 1s;
    }

    &:nth-child(3) {
        background: linear-gradient(to bottom, #27ae60 0%, #2ecc71 100%);
        animation-delay: 2s;
    }

    @keyframes wave {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
`;

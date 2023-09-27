import styled, { keyframes } from 'styled-components';
import waveImage from '../../../assets/photos/wave/wave.png';

const animate1 = keyframes`
    0% {
            background-position-x: 0;
        }
    100% {
        background-position-x: 1000px;
    }
`;
const animate2 = keyframes`
    0% {
            background-position-x: 0;
        }
    100% {
        background-position-x: -1000px;
    }
`;

export const StyledWaveContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    background-color: #1e8778;
`;

export const StyledWave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${waveImage});
    background-size: 1000px 100px;

    &:nth-child(1) {
        animation: ${animate1} 30s linear infinite;
        z-index: 1000;
        opacity: 1;
        animation-delay: 0s;
        bottom: 0;
    }

    &:nth-child(2) {
        animation: ${animate2} 15s linear infinite;
        z-index: 999;
        opacity: 0.5;
        animation-delay: -5s;
        bottom: 10px;
    }

    &:nth-child(3) {
        animation: ${animate1} 10s linear infinite;
        z-index: 998;
        opacity: 0.2;
        animation-delay: -2s;
        bottom: 20px;
    }

    &:nth-child(4) {
        animation: ${animate2} 5s linear infinite;
        z-index: 997;
        opacity: 0.7;
        animation-delay: -5s;
        bottom: 0;
    }
`;

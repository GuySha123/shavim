import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledWaveContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
`;

const StyledWave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #3498db 0%, #2980b9 100%);
    animation: ${waveAnimation} 1s ease-in-out infinite;

    &.wave2 {
        background: linear-gradient(to bottom, #e74c3c 0%, #c0392b 100%);
        animation-delay: 0.2s;
    }

    &.wave3 {
        background: linear-gradient(to bottom, #27ae60 0%, #2ecc71 100%);
        animation-delay: 0.4s;
    }
`;

const WaveAnimation: React.FC = () => {
    return (
        <StyledWaveContainer>
            <StyledWave className='wave wave1'></StyledWave>
            <StyledWave className='wave wave2'></StyledWave>
            <StyledWave className='wave wave3'></StyledWave>
        </StyledWaveContainer>
    );
};

export default WaveAnimation;

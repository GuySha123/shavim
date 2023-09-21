import React from 'react';
import { StyledWave, StyledWaveContainer } from './waves.styles';

const WaveAnimation: React.FC = () => {
    return (
        <StyledWaveContainer>
            <StyledWave className='wave wave1'></StyledWave>
            <StyledWave className='wave wave2'></StyledWave>
            <StyledWave className='wave wave3'></StyledWave>
            <StyledWave className='wave wave4'></StyledWave>
        </StyledWaveContainer>
    );
};

export default WaveAnimation;

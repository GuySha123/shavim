import styled from 'styled-components';

export const WelcomeSection = styled.div<{ scrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: ${({ scrolled }) => (scrolled ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    z-index: 1000; // Ensure it stays on top
    transform: ${({ scrolled }) => (scrolled ? 'scale(0.7)' : 'scale(1)')};
    background-color: #d45555;
`;

export const TitleH1 = styled.h1<{ scrolled: boolean }>`
    transition: all 0.3s ease-in-out;
    // Initial font size, adjust as needed
    font-size: ${({ scrolled }) => (scrolled ? '1rem' : '2rem')};
`;

export const TitleH2 = styled.h2<{ scrolled: boolean }>`
    transition: all 0.3s ease-in-out;
    // Initial font size, adjust as needed
    font-size: ${({ scrolled }) => (scrolled ? '0.85rem' : '1.5rem')};
`;

export const CustomDiv = styled.div<{ scrolled: boolean }>`
    transition: all 0.3s ease-in-out;
    // Add your div styling here
`;

import { useState, useEffect } from 'react';
import { CustomDiv, TitleH1, TitleH2, WelcomeSection } from './test.styles';
// Import styled components

const Test = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            // Adjust this value based on when you want the effect to trigger
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <WelcomeSection scrolled={scrolled}>
            <TitleH1 scrolled={scrolled}>Heading 1</TitleH1>
            <TitleH2 scrolled={scrolled}>Heading 2</TitleH2>
            <CustomDiv scrolled={scrolled}>Your Div Content</CustomDiv>
        </WelcomeSection>
    );
};

export default Test;

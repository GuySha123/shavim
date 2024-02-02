import { useEffect, useState } from 'react';
import ShavimLogoComp from '../../logo/ShavimLogoComp';
import {
    HeaderContainer,
    ShavimPetek,
    ShavimSlogan,
    WelcomeContainer,
} from './WelcomeSection.styles';

function WelcomeSection() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
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
        <WelcomeContainer $scrolled={scrolled}>
            <HeaderContainer $scrolled={scrolled}>
                <ShavimLogoComp />
                <ShavimSlogan $scrolled={scrolled}>
                    למען אנשים <br /> מיוחדים <br /> וקול הקהילה
                </ShavimSlogan>
                <ShavimPetek $scrolled={scrolled} />
            </HeaderContainer>
        </WelcomeContainer>
    );
}

export default WelcomeSection;

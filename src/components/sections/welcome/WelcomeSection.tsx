import ShavimLogoComp from '../../logo/ShavimLogoComp';
import { WelcomeContainer } from './WelcomeSection.styles';

function WelcomeSection() {
    return (
        <WelcomeContainer>
            <ShavimLogoComp />
            <h2>
                למען אנשים <br /> מיוחדים <br /> וקול הקהילה
            </h2>
        </WelcomeContainer>
    );
}

export default WelcomeSection;

import ShavimLogoComp from '../../components/logo/ShavimLogoComp';
import Introduction from '../introduction/Introduction';
import PartyPlatform from '../party-platform/PartyPlatform';
import { HomePage } from './Home.styles';

export default function Home() {
    return (
        <>
            <HomePage>
                <ShavimLogoComp />
                <h2>
                    למען אנשים <br /> מיוחדים <br /> וקול הקהילה
                </h2>
            </HomePage>
            <PartyPlatform />
            <Introduction />
        </>
    );
}

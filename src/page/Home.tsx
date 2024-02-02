import Introduction from '../components/sections/introduction/Introduction';
import PartyPlatform from '../components/sections/party-platform/PartyPlatform';
import WelcomeSection from '../components/sections/welcome/WelcomeSection';
import { PageContainer } from './Home.styles';

export default function Home() {
    return (
        <PageContainer>
            <WelcomeSection />
            <PartyPlatform />
            <Introduction />
        </PageContainer>
    );
}

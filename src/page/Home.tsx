import Introduction from '../components/sections/introduction/Introduction';
import PartyPlatform from '../components/sections/party-platform/PartyPlatform';
import WelcomeSection from '../components/sections/welcome/WelcomeSection';
import { PageContainer } from './Home.styles';
import { memberData } from '../data/member-data';
import { shavimData } from '../data/shavim-value';
import PartysActions from '../components/sections/partys-actions/PartysActions';

export default function Home() {
    return (
        <PageContainer>
            <WelcomeSection />
            <PartyPlatform data={memberData} />
            <PartysActions />
            <Introduction data={shavimData} />
        </PageContainer>
    );
}

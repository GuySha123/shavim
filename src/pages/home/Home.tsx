import WaveAnimation from '../../components/layouts/waves/Waves';
import ShavimLogoComp from '../../components/logo/ShavimLogoComp';
import { HomePage } from './Home.styles';

export default function Home() {
    return (
        <HomePage>
            <ShavimLogoComp />
            <h2>למען אנשים מיוחדים וקול הקהילה</h2>
            <WaveAnimation />
        </HomePage>
    );
}

import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/layouts/NotFound';
import TopNavbar from './components/layouts/TopNavbar';
import Footer from './components/layouts/Footer';
import { PageContainer } from './App.styles';
import WaveAnimation from './components/waves/Waves';
const Home = lazy(() => import('./pages/home/Home'));
const PartyPlatform = lazy(
    () => import('./pages/party-platform/PartyPlatform')
);
const Introduction = lazy(() => import('./pages/introduction/Introduction'));

function App() {
    return (
        <PageContainer>
            <BrowserRouter>
                <TopNavbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/partyplatform' element={<PartyPlatform />} />
                    <Route path='/introduction' element={<Introduction />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <WaveAnimation />
                <Footer />
            </BrowserRouter>
        </PageContainer>
    );
}

export default App;

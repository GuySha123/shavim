import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/layouts/not-found/NotFound';
import TopNavbar from './components/layouts/top-navbar/TopNavbar';
import Footer from './components/layouts/footer/Footer';
import { PageContainer } from './App.styles';
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

                <Footer />
            </BrowserRouter>
        </PageContainer>
    );
}

export default App;

/* Made by Guy Shalev */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/layouts/not-found/NotFound';
import TopNavbar from './components/layouts/top-navbar/TopNavbar';
import Footer from './components/layouts/footer/Footer';
import { PageContainer } from './App.styles';
import Loading from './components/layouts/loading/Loading';
const Home = lazy(() => import('./pages/home/Home'));
const PartyPlatform = lazy(
    () => import('./pages/party-platform/PartyPlatform')
);
const Introduction = lazy(() => import('./pages/introduction/Introduction'));

function App() {
    return (
        <PageContainer>
            <Router>
                <TopNavbar />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/partyplatform'
                            element={<PartyPlatform />}
                        />
                        <Route
                            path='/introduction'
                            element={<Introduction />}
                        />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </PageContainer>
    );
}

export default App;

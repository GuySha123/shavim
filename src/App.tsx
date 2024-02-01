/* Made by Guy Shalev */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/layouts/not-found/NotFound';
import Footer from './components/layouts/footer/Footer';
import { PageContainer } from './App.styles';
import Loading from './components/layouts/loading/Loading';
const Home = lazy(() => import('./pages/home/Home'));
const Introduction = lazy(() => import('./pages/introduction/Introduction'));

function App() {
    return (
        <PageContainer>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
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

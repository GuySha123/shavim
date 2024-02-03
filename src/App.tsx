/* Made by Guy Shalev */
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/layouts/not-found/NotFound';
import Footer from './components/layouts/footer/Footer';
import Loading from './components/layouts/loading/Loading';
const Home = lazy(() => import('./page/Home'));

function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </>
    );
}

export default App;

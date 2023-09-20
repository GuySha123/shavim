import React from 'react';
import {
    NotFoundPage,
    MessegeContainer,
    DirectBackToHomePage,
} from './styles/NotFound.styles';
import { HomePage } from '../../pages/home/Home.styles';

const NotFound: React.FC = () => {
    return (
        <NotFoundPage>
            <MessegeContainer>
                <HomePage>
                    <h1>
                        ש<span style={{ color: `#fff300` }}>וו</span>ים
                    </h1>
                </HomePage>
                <h2>דף זה אינו קיים</h2>
                <a href='/'>
                    <DirectBackToHomePage>חזרה לדף הבית</DirectBackToHomePage>
                </a>
            </MessegeContainer>
        </NotFoundPage>
    );
};

export default NotFound;

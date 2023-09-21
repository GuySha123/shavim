import React from 'react';
import {
    NotFoundPage,
    MessegeContainer,
    DirectBackToHomePage,
} from './NotFound.styles';
import ShavimLogoComp from '../../logo/ShavimLogoComp';

const NotFound: React.FC = () => {
    return (
        <NotFoundPage>
            <MessegeContainer>
                <ShavimLogoComp />
                <h2>דף זה אינו קיים</h2>
                <a href='/'>
                    <DirectBackToHomePage>חזרה לדף הבית</DirectBackToHomePage>
                </a>
            </MessegeContainer>
        </NotFoundPage>
    );
};

export default NotFound;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Hamburger,
    NavbarContainer,
    NavbarItems,
    NavbarLink,
} from './TopNavbar.styles';

const TopNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <NavbarContainer>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <NavbarItems $isOpen={isOpen}>
                <NavbarLink to='/' $isActive={location.pathname === '/'}>
                    דף הבית
                </NavbarLink>
                <NavbarLink
                    to='/partyplatform'
                    $isActive={location.pathname === '/partyplatform'}
                >
                    הנבחרת שלנו
                </NavbarLink>
                <NavbarLink
                    to='/introduction'
                    $isActive={location.pathname === '/introduction'}
                >
                    החזון
                </NavbarLink>
            </NavbarItems>
        </NavbarContainer>
    );
};

export default TopNavbar;

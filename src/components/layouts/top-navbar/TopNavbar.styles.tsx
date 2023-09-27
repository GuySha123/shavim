import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #19619f;
`;

export const NavbarItems = styled.div<{ $isOpen: boolean }>`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out,
            visibility 0.3s ease-in-out;
        max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
        opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
        visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
        overflow: hidden;

        border-bottom: solid 1px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        padding-bottom: 20px;
        background-color: #19619f;
        z-index: 9999;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    div {
        width: 30px;
        height: 3px;
        background-color: #fff;
        margin: 5px 0;
        transition: all 0.3s linear;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const NavbarLink = styled(Link)<{ $isActive: boolean }>`
    color: #fff;
    font-size: 1.2em;
    font-weight: 700;
    text-decoration: none;

    border-bottom: ${({ $isActive }) =>
        $isActive ? '2px solid #fff' : 'none'};

    @media (max-width: 768px) {
    }
`;

import styled from 'styled-components';
import ShavimTicket from '../../../assets/photos/logo/Shavim-Ticket.jpg';

//TODO:
//Increase the size of the title
//Check if the ShavimTicket is fitting after changes

export const WelcomeContainer = styled.div<{ $scrolled: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ $scrolled }) => ($scrolled ? '20vh' : '100vh')};
    transition: all 0.3s ease-in-out;
    background-color: ${({ $scrolled }) => ($scrolled ? '#dff2ff' : '#03619f')};
    @media (max-width: 769px) {
        height: ${({ $scrolled }) => ($scrolled ? '35vh' : '100vh')};
        transition: all 0.1s ease-in-out;
    }
`;

export const HeaderContainer = styled.div<{ $scrolled: boolean }>`
    position: fixed;
    top: 0;
    width: ${({ $scrolled }) => ($scrolled ? '600px' : '100%')};
    height: ${({ $scrolled }) => ($scrolled ? '90px' : 'auto')};
    flex-direction: ${({ $scrolled }) => ($scrolled ? 'row' : 'column')};
    padding: ${({ $scrolled }) => ($scrolled ? '10px 0' : '0')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    background-color: #03619f;
    border-radius: 0 0 15px 15px;
    z-index: 1001;
    gap: 30px;

    @media (max-width: 769px) {
        width: 100%;
        gap: 10px;
    }

    h1 {
        position: ${({ $scrolled }) => ($scrolled ? 'static' : 'absolute')};
        font-size: ${({ $scrolled }) => ($scrolled ? '4em' : '8em')};
        top: ${({ $scrolled }) => ($scrolled ? '0' : '125px')};
        background-color: ${({ $scrolled }) =>
            $scrolled ? 'none' : '#0d609bd6'};
        z-index: 1001;
        transition: top 0.3s ease-in-out;
        @media (max-width: 769px) {
            top: 50px;
        }
    }
`;

export const ShavimSlogan = styled.h2<{ $scrolled: boolean }>`
    position: ${({ $scrolled }) => ($scrolled ? 'static' : 'absolute')};
    z-index: 1001;
    top: ${({ $scrolled }) => ($scrolled ? '0' : '300px')};
    color: white;
    background-color: ${({ $scrolled }) => ($scrolled ? 'none' : '#0d609bd6')};
    font-size: ${({ $scrolled }) => ($scrolled ? '1.5em' : '3em')};
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    font-weight: 700;

    transition: top 0.3s ease-in-out;
    @media (max-width: 769px) {
        font-size: ${({ $scrolled }) => ($scrolled ? '1em' : '3em')};
        background-color: #00000000;
        top: 200px;
    }
`;

export const ShavimPetek = styled.div<{ $scrolled?: boolean }>`
    position: ${({ $scrolled }) => ($scrolled ? 'static' : 'absolute')};
    width: ${({ $scrolled }) => ($scrolled ? '75px' : '220px')};
    height: ${({ $scrolled }) => ($scrolled ? '75px' : '421px')};
    background: url(${ShavimTicket});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain, cover;
    top: ${({ $scrolled }) => ($scrolled ? '0' : '25vh')};
    left: calc(100vw - 70vw);
    transform: ${({ $scrolled }) =>
        $scrolled ? 'rotate(-20deg)' : 'rotate(-25deg)'};
    transition: top 0.3s ease-in-out;

    @media (max-width: 375px) {
        width: ${({ $scrolled }) => ($scrolled ? '75px' : '120px')};
        height: ${({ $scrolled }) => ($scrolled ? '75px' : '321px')};
        top: calc(100vh - 45vh);
        left: auto;
    }

    @media (min-width: 376px) and (max-width: 769px) {
        top: calc(100vh - 52vh);
        left: auto;
        transform: rotate(-20deg);
    }

    @media (min-width: 770px) and (max-width: 1025px) {
        left: calc(100vw - 80vw);
    }
`;

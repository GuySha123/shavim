import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #b2d8f9;
    margin-top: auto;
    display: grid;
    width: 100%;
    height: 8rem;
    padding: 0 10px 0 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;
export const JoinUsTitle = styled.div`
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    @media (max-width: 480px) {
        display: none;
    }
`;

export const FooterSocialMedia = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: 2 / 1 / 3 / 4;
    @media (max-width: 480px) {
        grid-area: 1 / 2 / 4 / 4;
        justify-content: left;
    }
`;

export const SocialMediaAnchor = styled.a`
    position: relative;
    z-index: 1499;
    margin: 0 10px;
    border-radius: 50%;
    box-sizing: border-box;
    background: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.5s;
    background-color: #b2d8f9;
    font-size: 2.5em;

    &:hover {
        background-color: #03619f;
        z-index: 1500;
        color: #fff !important;
        box-shadow: 0 0 5px #03619fd0, 0 0 25px #03619fbc, 0 0 50px#03619fc2,
            0 0 100px #03619fb7;
    }
`;

export const ContactParty = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 200px;
    display: flex;
    align-items: center;
    justify-content: left;
    grid-area: 1 / 1 / 4 / 1;

    @media (max-width: 480px) {
        margin-left: 0;
    }

    @media (min-width: 481px) and (max-width: 769px) {
        margin-left: 50px;
    }

    @media (min-width: 770px) and (max-width: 1025px) {
        margin-left: 100px;
    }

    @media (min-width: 1026px) and (max-width: 1280px) {
        margin-left: 150px;
    }
`;

export const FooterCredit = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    grid-area: 3 / 2 / 4 / 4;

    @media (max-width: 480px) {
        display: none;
    }
`;

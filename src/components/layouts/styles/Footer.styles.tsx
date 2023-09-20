import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #b2d8f9;
    margin-top: auto;
    display: grid;
    width: 100%;
    height: 8rem;
    padding: 0 15px 0 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
`;
export const FooterSocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: 2 / 1 / 3 / 4;
`;

export const SocialMediaAnchor = styled.a`
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
    font-size: 2em;

    &:hover {
        background-color: #03619f;
        color: #fff !important;
        box-shadow: 0 0 5px #03619f, 0 0 25px #03619f, 0 0 50px#03619f,
            0 0 100px #03619f;
    }
`;

export const FooterCredit = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    grid-area: 3 / 2 / 4 / 4;
`;

import styled from 'styled-components';
type PictureVariant = 'switch-place' | 'left' | 'right' | 'none';

export const HeadPartyContainter = styled.div`
    color: #03619f;
    display: flex;
    align-items: center;

    @media (max-width: 769px) {
        flex-direction: column;
        width: 100%;
    }
    @media (min-width: 769px) {
        padding: 15px 50px;
        width: 100%;
    }
`;

export const HeadPartyMemberPicture = styled.div`
    height: 31rem;
    width: 13.5rem;
    background-repeat: no-repeat;
    @media (max-width: 769px) {
        background-color: #03619f;
        height: 12.5rem;
        width: 12.5rem;
        border-radius: 50%;
    }
`;

export const HeadPartySpeach = styled.div`
    flex: 1;
    padding: 16px;
    @media (max-width: 769px) {
    }
    @media (min-width: 769px) {
        margin: 5rem;
    }
    @media (min-width: 1440px) {
    }
`;

export const YellowLine = styled.div`
    background-color: #fff300;
    width: 100%;
    height: 15px;
    @media (max-width: 769px) {
        display: none;
    }
`;

export const PartyMember = styled.div<{ $variant: PictureVariant }>`
    background-color: ${(props) =>
        props.$variant === 'right' ? '#03619f' : '#dff2ff'};
    color: ${(props) => (props.$variant === 'right' ? '#fff300' : '#03619f')};
    display: flex;
    align-items: center;

    @media (max-width: 769px) {
        flex-direction: column;
        padding: 2rem 1rem;
    }

    @media (min-width: 770px) and (max-width: 1025px) {
        padding: 3rem 6.5rem;
    }

    @media (min-width: 1026px) and (max-width: 1280px) {
        padding: 3rem 5rem;
    }
    @media (min-width: 1281px) {
        padding: 3rem 18rem;
    }
`;

export const PartyMemberPicture = styled.div<{ $variant: PictureVariant }>`
    height: 12.5rem;
    width: 12.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    order: ${(props) => (props.$variant === 'switch-place' ? '1' : '0')};
    @media (max-width: 769px) {
        order: ${(props) => (props.$variant === 'switch-place' ? '-1' : '0')};
    }
`;

export const PartyMemberInfo = styled.div`
    flex: 1;
    padding: 16px;
`;

export const PartyMemberTitle = styled.h2`
    font-size: 2em;
    font-weight: 700;
`;

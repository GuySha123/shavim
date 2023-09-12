import styled from 'styled-components';

export const HeadPartyMemberPicture = styled.div`
    height: 31rem;
    width: 13.5rem;
    background-repeat: no-repeat;
`;

export const HeadPartyContainter = styled.div`
    color: #03619f;
    display: flex;
    padding: 15px 50px;
    align-items: center;
    @media (min-width: 1201px) {
        width: 50vw;
    }
`;

export const PartyMemberPicture = styled.div`
    height: 12.5rem;
    width: 12.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
`;
export const PartyMember = styled.div`
    background-color: #03619f;
    color: #fff300;
    display: flex;
    padding: 15px 50px;
    align-items: center;
    h4 {
        margin-right: 8px;
        margin-top: 2px;
    }
`;
export const PartyMemberInfo = styled.div`
    flex: 1;
    padding: 16px;
`;

export const PartyMemberRight = styled.div``;

export const PartyMemberLeft = styled.div``;

export const PartyMemberTitle = styled.div`
    display: flex;
    align-items: 'center';
`;

import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid #4caf50;
    background-color: #4caf50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;

    transition: 0.5s all ease-out;
`;

export const FancyButton = styled(StyledButton)`
    backgorund-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`;

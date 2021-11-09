import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    text-align: center;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 10px;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    border: none;
    width: 100%;
    transition: filter 0.5s;

    &:hover {
        filter: brightness(120%);
    }
`;

export const Info = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.mediumGray};
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    max-width: 200px;

    ${({ special }) => special && css`
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        transition: filter 0.5s;

        &:hover {
            filter: brightness(120%);
        }
    `}
`;
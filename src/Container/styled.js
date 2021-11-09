import styled from "styled-components";

export const Wrapper = styled.div`
    flex-basis: 600px;
    margin: 20px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 10px;
`;
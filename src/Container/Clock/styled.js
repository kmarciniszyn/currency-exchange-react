import styled from 'styled-components';

export const Wrapper = styled.p`
    font-family: 'Inconsolata', monospace;
    font-size: small;
    text-align: right;
    color: ${({ theme }) => theme.colors.mediumGray};
`;
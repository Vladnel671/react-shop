import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        max-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        background: ${theme.bg.application};
        position: relative;
    `}
`;

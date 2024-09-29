import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: ${theme.bg.header};
        position: sticky;
        top: 0;
        min-height: 10px;
        padding: 20px 45px;
        z-index: 999;
    `}
`;

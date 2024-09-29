import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: grid;
        flex-direction: row;
        align-items: center;
        gap: 30px 0;
        width: 100%;
        max-width: 500px;

        input {
            width: calc(100% - 20px);
        }

        h3,
        h4 {
            color: ${theme.text.text};
        }

        h3 {
            font-size: ${theme.fontSizes.sm}px;
            grid-column: 1/3;
        }
    `}
`;

export const ProductItem = styled.div`
    ${({ theme }) => css`
        display: flex;
        max-width: 300px;
    `}
`;

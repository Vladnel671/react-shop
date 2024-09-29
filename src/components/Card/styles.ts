import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 65px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        color: ${theme.text.button};
        width: calc(100% - 130px);
        max-width: 366px;

        div {
            color: ${theme.text.text};
            font-size: ${theme.fontSizes.sm}px;
        }

        img {
            width: 100%;
            object-fit: contain;
        }
    `}
`;

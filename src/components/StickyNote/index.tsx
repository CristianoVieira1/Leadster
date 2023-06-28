import styled, { css } from 'styled-components'

export const StickyNote = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    right: 0;
    margin-top: 4rem;
    height: 20px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}

    nav {
      display: flex;
      flex-direction: column;

      a {
        display: block;
        color: ${theme.colors.gray};
        text-decoration: none;
        margin-bottom: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.xsmall};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.black};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    }

    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`

export const BottomContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.large};

    span {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const SocialMedia = styled.nav`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 40px;

  a {
    svg {
      font-size: 25px;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray};
      border-radius: 20px;
      padding: 5px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const Contact = styled.div`
  flex-direction: column;
  align-items: center;
`

export const ContactText = styled.h5`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.normal};
`

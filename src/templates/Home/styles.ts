import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    border: 2px solid ${theme.colors.primary};
    border-radius: 20px 20px 20px 5px;
    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`

    `}
  `}
`

export const Subtitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};

    `}
  `}
`
export const TextIcon = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 31.6rem;
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    transform: rotateX(45deg);

    ${media.greaterThan('medium')`
    position: absolute;
    top: 22.6rem;
    width: 40px;
    height: 40px;
    margin-left: 2.5rem;
    transform: rotateX(45deg);
    `}
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 95%;
    border: 1px solid ${theme.colors.gray};

    ${media.greaterThan('medium')`
    width: 50%;
    `}
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    text-align: center;

    ${media.greaterThan('medium')`
    color: ${theme.colors.textGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    `}
  `}
`

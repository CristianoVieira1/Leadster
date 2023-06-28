import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: ${({ theme }) => theme.spacings.large} 20px;
    align-items: center;
  `}
`

export const Wrapper = styled.div`
  padding: 0 10px;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export const Image = styled.img`
  width: 70%;
`

export const Fotter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};

    `}
  `}
`

export const Subtitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-align: left;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.medium};

    `}
  `}
`

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const ImageButton = styled.img`
  width: 30%;
`

export const Card = styled.img`
  width: 3%;
  margin-right: 10px;
`
export const Rating = styled.img`
  width: 20%;
`

export const RatingText = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    text-align: left;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xsmall};

    `}
  `}
`

import { tint } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;
    border-radius: 5px;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  `}
`

interface IDownloadsProps {
  color: 'primary' | 'green' | 'yellow' | 'gray'
}

export const IconDown = styled.div<IDownloadsProps>`
  ${({ theme, color }) => css`
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    background: ${tint(0.5, theme.colors[color])};
    padding: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.font.sizes.xxsmall};
      padding: 10px;
    }
  `}
`

export const Title = styled.h1<IDownloadsProps>`
  ${({ theme, color }) => css`
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    font-weight: ${({ theme }) => theme.font.normal};
    color: ${({ theme }) => theme.colors[color]};
    background: ${tint(0.7, theme.colors[color])};
    padding: 8.5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.font.sizes.xxsmall};
      padding: 10px;
    }
  `}
`

export const Description = styled.p``

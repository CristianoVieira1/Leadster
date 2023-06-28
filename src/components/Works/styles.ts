import styled from 'styled-components'
import theme from '../../styles/theme'

export const GalleryContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  h5 {
    font-size: ${theme.font.sizes.small};
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Button = styled.button<{ active: boolean }>`
  border: 1px solid
    ${(props) => (props.active ? theme.colors.primary : theme.colors.black)};
  border-radius: 15px;
  color: ${(props) => (props.active ? 'white' : 'black')};
  background-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.white};
  padding: 8px 15px;
  cursor: pointer;
  font-size: ${theme.font.sizes.small};
  margin-right: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`

export const Select = styled.select`
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 15px;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacings.large};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  z-index: 0;
`
export const CardText = styled.p`
  margin-top: 10px;
`

export const Card = styled.div<{ isHovered: boolean }>`
  position: relative;
  margin: 10px;
  padding: 10px;
  border: 1px solid ${(props) => (props.isHovered ? 'blue' : 'transparent')};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${CardImage} {
      filter: brightness(70%);
    }

    ${CardText} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    background-color: rgba(0, 0, 255, 0.2);
  }
`

export const PlayIcon = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    top: -10rem;
  }
`

export const CardHover = styled.div`
  position: relative;
  z-index: 1;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
  }
`
export const Paginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;

  .hidden {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 0 5px;
  }
`
export const PageNumber = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 5px;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`

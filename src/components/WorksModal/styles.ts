import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 212, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const ModalContent = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  width: 440px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalText = styled.p`
  font-weight: ${({ theme }) => theme.font.bold};
  text-align: center;
  max-width: 80%;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.bold};
    margin-right: 5px;
  }
`

export const ModalVideo = styled.video`
  width: 100%;
  height: auto;
  margin-top: 10px;
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px 0;
`
export const ModalDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 10px;
`

export const ModalCloseButton = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 18px;
  cursor: pointer;
`

export const ModalVideoContainer = styled.div``

export const ModalVideoEmbed = styled.iframe`
  width: 100%;
  height: 270px;
`
export const DownloadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 0 20px;
  gap: 5px;
`
export const ModalFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-top: 10px;
  padding: 20px;
  gap: 2px;

  @media (max-width: 768px) {
    display: none;
  }

  /* @media (max-width: 480px) {
    grid-template-columns: 1fr;
  } */
`

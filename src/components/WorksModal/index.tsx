import { Downloads } from './components/Downloads'
import * as S from './styles'

interface GalleryData {
  id: number
  image: string
  text: string
  video: string
  description: string
  category: string
  date: string
}

const WorksModal: React.FC<{ card: GalleryData; onClose: () => void }> = ({
  card,
  onClose
}) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${card.video}`
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalCloseButton onClick={onClose}>X</S.ModalCloseButton>
        <S.Content>
          <S.ModalText>
            <span>Webinar:</span>
            {card.text}
          </S.ModalText>
        </S.Content>

        <S.ModalVideoContainer>
          <S.ModalVideoEmbed
            src={youtubeEmbedUrl}
            frameBorder="0"
            allowFullScreen
          ></S.ModalVideoEmbed>
        </S.ModalVideoContainer>
        <S.Text>Descrição</S.Text>
        <S.ModalDescription>{card.description}</S.ModalDescription>
        <S.Text>Download</S.Text>
        <S.DownloadArea>
          <Downloads title="Spreadsheet.xls" color="green" />
          <Downloads title="Document.doc" color="primary" />
          <Downloads title="Presentation.ppt" color="yellow" />
        </S.DownloadArea>
      </S.ModalContent>

      <S.ModalFooter>
        <Downloads title="Spreadsheet.xls" color="green" />
        <Downloads title="Document.doc" color="primary" />
        <Downloads title="Presentation.ppt" color="yellow" />
        <Downloads title="Folder.zip" color="gray" />
      </S.ModalFooter>
    </S.ModalOverlay>
  )
}

export default WorksModal

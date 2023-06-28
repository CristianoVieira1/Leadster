import { FaCloudDownloadAlt } from 'react-icons/fa'
import theme from '../../../../styles/theme'
import * as S from './styles'

interface IDownloadsProps {
  title: string
  color: 'primary' | 'green' | 'yellow' | 'gray'
}

export const Downloads = ({ title, color }: IDownloadsProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.IconDown color={color}>
          <FaCloudDownloadAlt color={theme.colors[color]} />
        </S.IconDown>
        <S.Title color={color}>{title}</S.Title>
      </S.Content>
    </S.Container>
  )
}

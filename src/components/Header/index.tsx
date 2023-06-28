import * as S from './styles'

export const Header = () => {
  return (
    <S.SectionBanner>
      <S.Title>WEBINARS EXCLUSIVOS</S.Title>
      <S.Subtitle>Menos Conversinha,</S.Subtitle>
      <S.TextIcon>
        Mais Conversã
        <S.Image src={'/img/asset-header.png'} alt="Icone" />o
      </S.TextIcon>
      <S.Line />
      <S.Text>
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </S.Text>
    </S.SectionBanner>
  )
}

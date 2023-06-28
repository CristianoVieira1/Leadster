import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { StickyNote } from '../../components/StickyNote'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <StickyNote>
        <Logo color="black" size="large" />
      </StickyNote>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base

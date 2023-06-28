import { Container } from '../components/Container'
import Empty from '../components/Empty'

export default function Page404() {
  return (
    <Container>
      <Empty
        title="404: Não encontrado"
        description="Ops... não encontramos a página que você está procurando."
        hasLink
      />
    </Container>
  )
}

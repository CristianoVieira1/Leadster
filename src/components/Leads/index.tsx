import Button from '../Button'
import * as S from './styles'

const Leads = () => {
  return (
    <S.Content>
      <S.Wrapper>
        <S.Image src="/img/comparativo_img_CTA.png" alt="Leads" />
      </S.Wrapper>

      <S.Fotter>
        <S.TextArea>
          <S.Title>
            Pronto para triplicar sua <br /> <strong>Geração de Leads?</strong>
          </S.Title>
          <S.Subtitle>
            Criação e ativação em <strong>4 minutos.</strong>
          </S.Subtitle>
        </S.TextArea>
        <S.ButtonArea>
          <S.Div>
            <Button href="#" color="primary">
              <span>Ver demonstração</span>
            </Button>
            <S.ImageButton src="/img/selo_RD.png" alt="Leads" />
          </S.Div>
          <S.Div>
            <S.RatingText>
              <S.Card src="/img/no-card-dark.webp" alt="Leads" />
              Não é necessário Cartão de Crédito |&nbsp;&nbsp;
              <S.Rating src="/img/rating.webp" alt="Leads" />
              &nbsp; 4.9/5 média de satisfação
            </S.RatingText>
          </S.Div>
        </S.ButtonArea>
      </S.Fotter>
    </S.Content>
  )
}

export default Leads

import Link from 'next/link'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <S.TopContent>
      <Logo color="black" />
    </S.TopContent>

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links Principais
        </Heading>
        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Ferramenta</a>
          </Link>
          <Link href="/">
            <a>Preços</a>
          </Link>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Cases
        </Heading>
        <nav id="resources">
          <Link href="/">
            <a>Geração de Leads B2B</a>
          </Link>
          <Link href="/">
            <a>Geração de Leads em Software</a>
          </Link>
          <Link href="/">
            <a>Geração de Leads em Imobiliária</a>
          </Link>
          <Link href="/">
            <a>Cases de Sucesso</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Materiais
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>Parceria com Agências</a>
          </Link>
          <Link href="/">
            <a>Guia definitivo de Marketing</a>
          </Link>
          <Link href="/">
            <a>Materiais Gratuitos</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Siga a Leadster
        </Heading>
        <S.SocialMedia>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </S.SocialMedia>
        <S.Contact>
          <S.ContactText>
            <strong>E-mail:</strong> contato@leadster.com.br
          </S.ContactText>
          <S.ContactText>
            <strong>Telefone:</strong> (42) 98828-9851
          </S.ContactText>
        </S.Contact>
      </S.Column>
    </S.Content>

    <S.BottomContent>
      <S.Copyright>
        Copyright © {currentYear} Todos os direitos reservados.
      </S.Copyright>
      <S.Copyright>
        Rua Jo'se Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos
        de uso
      </S.Copyright>
    </S.BottomContent>
  </S.Wrapper>
)

export default Footer

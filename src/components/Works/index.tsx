import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Container } from '../Container'
import WorksModal from '../WorksModal'
import jsonData from './gallery'
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

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedCard, setSelectedCard] = useState<GalleryData | null>(null)
  const [currentPage, setCurrentPage] = useState(0) // Página atual

  const categories = Array.from(new Set(jsonData.map((item) => item.category)))
  const dates = Array.from(new Set(jsonData.map((item) => item.date)))
  const cardsPerPage = 9
  const pageCount = Math.ceil(jsonData.length / cardsPerPage) // Número total de páginas

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleDateChange = (date: string) => {
    setSelectedDate(date)
  }

  const handleCardClick = (card: GalleryData) => {
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  const filteredData = jsonData.filter(
    (item) =>
      (selectedCategory === '' || item.category === selectedCategory) &&
      (selectedDate === '' || item.date === selectedDate)
  )

  const renderCards = () => {
    const startIndex = currentPage * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    const currentCards = filteredData.slice(startIndex, endIndex)

    return currentCards.map((item) => (
      <S.Card
        key={item.id}
        isHovered={selectedCard !== null && selectedCard.id === item.id}
        onClick={() => handleCardClick(item)}
      >
        <S.CardImage src={item.image} alt={item.text} />
        <S.CardHover>
          <S.CardOverlay />
          <S.PlayIcon>
            <FaPlay />
          </S.PlayIcon>
        </S.CardHover>
        <S.CardText>{item.text}</S.CardText>
      </S.Card>
    ))
  }

  return (
    <Container>
      <S.GalleryContainer>
        <S.Menu>
          <S.ButtonArea>
            {categories.map((category) => (
              <S.Button
                key={category}
                active={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </S.Button>
            ))}
          </S.ButtonArea>
          <S.Content>
            <h5>Ordenado por</h5>
            <S.Select onChange={(e) => handleDateChange(e.target.value)}>
              <option value="">Data de Publicação</option>
              {dates.map((date) => (
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString()}
                </option>
              ))}
            </S.Select>
          </S.Content>
        </S.Menu>
        <S.CardContainer>{renderCards()}</S.CardContainer>
        {selectedCard !== null && (
          <WorksModal card={selectedCard} onClose={handleCloseModal} />
        )}
        <S.Paginator>
          <span>Página </span>
          <ul>
            {Array.from({ length: pageCount }, (_, index) => (
              <S.PageNumber
                key={index}
                onClick={() => handlePageChange({ selected: index })}
                className={currentPage === index ? 'active' : ''}
              >
                {index + 1}
              </S.PageNumber>
            ))}
          </ul>
        </S.Paginator>
      </S.GalleryContainer>
    </Container>
  )
}

export default Works

import { Header } from '../../components/Header'
import Leads from '../../components/Leads'
import Works from '../../components/Works'
import Base from '../Base'

const Home = () => {
  return (
    <Base>
      <Header />
      <Works />
      <Leads />
    </Base>
  )
}

export default Home

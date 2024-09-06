import { ScrollView } from 'tamagui'
import {
  BannerSection,
  CategorySection,
  DealSection,
  ProductSection,
  TrendingSection,
} from '../../components'

const Home = () => {
  return (
    <ScrollView>
      <CategorySection />
      <BannerSection />
      <TrendingSection />
      <DealSection />
      <ProductSection />
    </ScrollView>
  )
}

export default Home

import { YStack } from 'tamagui'
import {
  BannerSection,
  CategorySection,
  DealSection,
  ProductSection,
  TrendingSection,
} from '../../components'

const Home = () => {
  return (
    <YStack>
      <CategorySection />
      <BannerSection />
      <TrendingSection />
      <ProductSection />
      <DealSection />
    </YStack>
  )
}

export default Home

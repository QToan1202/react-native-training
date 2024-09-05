import { YStack } from 'tamagui'
import { BannerSection, CategorySection, DealSection, ProductSection } from '../../components'

const Home = () => {
  return (
    <YStack>
      <CategorySection />
      <BannerSection />
      <ProductSection />
      <DealSection />
    </YStack>
  )
}

export default Home

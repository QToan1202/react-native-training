import { YStack } from 'tamagui'
import { BannerSection, CategorySection, ProductSection } from '../../components'

const Home = () => {
  return (
    <YStack>
      <CategorySection />
      <BannerSection />
      <ProductSection />
    </YStack>
  )
}

export default Home

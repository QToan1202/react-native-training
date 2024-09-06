import { ScrollView } from 'tamagui'

import { HomeTabScreenProps } from '@practice-three/types'

import {
  BannerSection,
  CategorySection,
  DealSection,
  ProductSection,
  TrendingSection,
} from '../../components'

type HomeScreenProps = HomeTabScreenProps<'Home'>

const Home = ({ navigation }: HomeScreenProps) => {
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

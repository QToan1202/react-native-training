import { getTokenValue, ScrollView } from 'tamagui'
import { StyleSheet } from 'react-native'

import { HomeTabScreenProps } from '@practice-three/types'

import {
  BannerSection,
  CategorySection,
  DealSection,
  HeaderSection,
  ProductSection,
  TrendingSection,
} from '../../components'

type HomeScreenProps = HomeTabScreenProps<'Home'>

const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderSection />
      <CategorySection />
      <BannerSection />
      <TrendingSection />
      <DealSection />
      <ProductSection />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: getTokenValue('$color.pure_white'),
  },
})

export default Home

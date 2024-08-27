import { ScrollView, YStack } from 'tamagui'

import { Carousel } from '@practice-three/components'

import {
  AboutUs,
  BannerSection,
  CategorySection,
  DealSection,
  QualitySection,
  TrendingSection,
} from '../../components'

const Home = () => {
  return (
    <YStack flex={1} gap={80} backgroundColor="$pure_white">
      <Carousel
        data={[
          'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
          'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
        ]}
      />
      <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'row', gap: 40 }}>
        <TrendingSection />
      </ScrollView>
      <DealSection />
      <BannerSection />
      <CategorySection />
      <QualitySection />
      <AboutUs />
    </YStack>
  )
}

export default Home

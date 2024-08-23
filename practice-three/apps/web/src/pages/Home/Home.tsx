import { YStack } from 'tamagui'

import { Carousel } from '@practice-three/components'

import { AboutUs, QualitySection } from '../../components'

const Home = () => {
  return (
    <YStack flex={1} backgroundColor="$pure_white">
      <Carousel
        data={[
          'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
          'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
        ]}
      />
      <QualitySection />
      <AboutUs />
    </YStack>
  )
}

export default Home

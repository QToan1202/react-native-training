import { Heading, ScrollView, YStack } from 'tamagui'

import { Carousel, CategoryItem } from '@practice-three/components'

import { AboutUs, QualitySection, TrendingSection } from '../../components'
import { Grid } from '../../layout'
import { CATEGORY_ITEMS } from '../../constants'

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
      <YStack gap={26}>
        <Heading color="$black" fontSize="$6" fontWeight="700">
          Shop by Categories
        </Heading>
        <Grid>
          {CATEGORY_ITEMS.map((item) => (
            <CategoryItem key={item.title} {...item} />
          ))}
        </Grid>
      </YStack>
      <QualitySection />
      <AboutUs />
    </YStack>
  )
}

export default Home

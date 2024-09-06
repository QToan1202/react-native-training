import { Heading, ScrollView, XStack, YStack } from 'tamagui'

import { Carousel, Image } from '@practice-three/components'

import {
  AboutUs,
  BannerSection,
  BlogSection,
  CategorySection,
  DealSection,
  OfferSection,
  QualitySection,
  ReviewSection,
  TrendingSection,
} from '../../components'

const Home = () => (
  <YStack flex={1} gap={80} backgroundColor="$white">
    <Carousel
      data={[
        'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
        'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
      ]}
      renderItem={({ item }) => (
        <Image
          resizeMode="cover"
          source={{
            uri: item,
            width: 400,
            height: 300,
          }}
        />
      )}
    />
    <ScrollView contentContainerStyle={{ flex: 1, gap: 25 }}>
      <Heading color="$black" fontSize="$6" fontWeight="700">
        Trending Now
      </Heading>
      <XStack gap={40}>
        <TrendingSection />
      </XStack>
    </ScrollView>
    <DealSection />
    <OfferSection />
    <BannerSection />
    <CategorySection />
    <ReviewSection />
    <BlogSection />
    <QualitySection />
    <AboutUs />
  </YStack>
)

export default Home

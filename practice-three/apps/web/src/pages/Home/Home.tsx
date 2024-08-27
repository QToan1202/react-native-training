import { Heading, ScrollView, YStack } from 'tamagui'

import { Button, Carousel, CategoryItem, Image } from '@practice-three/components'

import { AboutUs, QualitySection, TrendingSection } from '../../components'
import { Grid } from '../../layout'
import { CATEGORY_ITEMS } from '../../constants'
import { banner, foreverLogo } from '../../assets/images'

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
      <YStack>
        <Image
          $platform-web={{ filter: 'brightness(70%)' }}
          width="100%"
          flex={1}
          source={{ uri: banner, height: 890 }}
        />
        <YStack position="absolute" inset={0} top={200} gap={35}>
          <YStack gap={90}>
            <Image source={{ uri: foreverLogo, height: 90, width: 560 }} />
            <Heading color="$pure_white" fontSize={48} fontWeight="700" textAlign="center">
              Big Fashion Festival
            </Heading>
          </YStack>
          <Heading color="$pure_white" fontSize={42} fontWeight="700" textAlign="center">
            70&#37; &#45; 80&#37; off
          </Heading>
          <Button
            variant="outlined"
            title="explore"
            alignSelf="center"
            marginTop={35}
            paddingVertical={10}
            borderRadius={10}
            borderColor="$pure_white"
            fontSize="$5"
            color="$pure_white"
          />
        </YStack>
      </YStack>
      <YStack gap={26}>
        <Heading color="$black" fontSize="$6" fontWeight="700">
          Shop by Categories
        </Heading>
        <Grid height={686}>
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

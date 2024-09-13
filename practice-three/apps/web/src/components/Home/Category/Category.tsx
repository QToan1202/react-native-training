import { Heading, XStack, YStack } from 'tamagui'

import { CategoryItem } from '@practice-three/shared/ui'

import { menJacket, pant, sweater, womenJacket, womenPant, womenTop } from '../../../assets/images'

const Category = () => (
  <YStack gap={26}>
    <Heading color="$black" fontSize="$6" fontWeight="700">
      Shop by Categories
    </Heading>
    <XStack height={686} gap={25}>
      <YStack flex={1} flexBasis={0}>
        <CategoryItem image={womenPant} title="Womens Pants" />
      </YStack>
      <YStack flex={1} flexBasis={0} gap={25}>
        <CategoryItem image={menJacket} title="Mens Jacket" />
        <CategoryItem image={womenTop} title="Womens Tops" />
      </YStack>
      <YStack flex={1} flexBasis={0} gap={25}>
        <CategoryItem image={sweater} title="Sweater" />
        <XStack flex={1} flexBasis={0} gap={25}>
          <CategoryItem image={pant} title="Pants" />
          <CategoryItem image={womenJacket} title="Womens Jackets" />
        </XStack>
      </YStack>
    </XStack>
  </YStack>
)

export default Category

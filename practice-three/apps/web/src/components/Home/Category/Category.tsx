import { Heading, YStack } from 'tamagui'

import { CategoryItem } from '@practice-three/components'

import { Grid } from '@practice-three/layouts'
import { CATEGORY_ITEMS } from '../../../constants'

const Category = () => (
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
)

export default Category

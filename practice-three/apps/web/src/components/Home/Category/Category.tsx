import { Heading, YStack } from 'tamagui'

import { CategoryItem } from '@practice-three/components'
import { Grid, GridItem } from '@practice-three/layouts'

import { CATEGORY_ITEMS } from '../../../constants'

const Category = () => (
  <YStack gap={26}>
    <Heading color="$black" fontSize="$6" fontWeight="700">
      Shop by Categories
    </Heading>
    <Grid height={686}>
      {CATEGORY_ITEMS.map((item) => (
        <GridItem key={item.title}>
          <CategoryItem {...item} />
        </GridItem>
      ))}
    </Grid>
  </YStack>
)

export default Category

import { Card, CardProps, getTokenValue } from 'tamagui'

import { Skeleton } from '@practice-three/shared/ui'

export type ProductCardSkeleton = CardProps

const ProductCardSkeleton = ({ ...rest }: ProductCardSkeleton) => (
  <Card
    maxWidth={getTokenValue('$card.width')}
    maxHeight={getTokenValue('$card.height')}
    borderRadius={10}
    overflow="hidden"
    animation="slow"
    enterStyle={{
      opacity: 0,
    }}
    exitStyle={{
      opacity: 0,
    }}
    backgroundColor="$white"
    {...rest}
  >
    <Skeleton variants="rectangular" width={getTokenValue('$card.width')} height={300} />
    <Card.Header paddingHorizontal={21} paddingVertical={10} gap={10}>
      <Skeleton height={28} />
      <Skeleton height={21} />
    </Card.Header>
    <Card.Footer marginHorizontal={21} marginBottom={12}>
      <Skeleton height={28} />
    </Card.Footer>
  </Card>
)

export default ProductCardSkeleton

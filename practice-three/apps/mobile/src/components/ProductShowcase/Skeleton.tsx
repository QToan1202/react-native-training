import { XStack, YStack } from 'tamagui'

import { Skeleton } from '@practice-three/shared/ui'

const ProductShowcaseSkeleton = () => (
  <YStack gap={10}>
    <XStack gap={8}>
      <Skeleton flex={2} width="100%" height={200} borderRadius={8} />
      <YStack flex={1} justifyContent="space-between" gap={10}>
        {[...Array(2).keys()].map((item) => (
          <Skeleton key={item} flex={1} width="100%" borderRadius={8} height={95} />
        ))}
      </YStack>
    </XStack>
    <YStack gap={5}>
      <Skeleton width={200} height={40} />
      <Skeleton width={150} height={30} />
      <Skeleton width={200} height={40} />
    </YStack>
    <Skeleton flex={1} width="100%" height={45} />
  </YStack>
)

export default ProductShowcaseSkeleton

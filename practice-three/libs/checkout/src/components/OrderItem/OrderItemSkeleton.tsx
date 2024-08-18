import { XStack, XStackProps, YStack } from 'tamagui'

import { Skeleton } from '@practice-three/components'

type OrderItemSkeletonProps = XStackProps

const OrderItemSkeleton = ({ ...props }: OrderItemSkeletonProps) => {
  return (
    <XStack
      justifyContent="space-between"
      padding={25}
      elevation={1}
      borderWidth={1}
      borderColor="$pale"
      {...props}
    >
      <XStack gap={15}>
        <Skeleton width={225} height={250} />
        <YStack justifyContent="space-between">
          <YStack gap={10}>
            <Skeleton width={280} height={30} />
            <Skeleton width={150} height={30} />
            <Skeleton width={200} height={30} />
            <Skeleton width={280} height={30} />
            <Skeleton width={280} height={30} />
          </YStack>
          <XStack gap={20}>
            <Skeleton width={280} height={40} />
          </XStack>
        </YStack>
      </XStack>
      <YStack gap={10} alignItems="flex-start">
        <Skeleton width={180} height={24} />
      </YStack>
    </XStack>
  )
}

export default OrderItemSkeleton

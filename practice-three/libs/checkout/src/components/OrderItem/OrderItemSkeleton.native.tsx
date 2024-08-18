import { XStack, XStackProps, YStack } from 'tamagui'

import { Skeleton } from '@practice-three/components'

type OrderItemSkeletonProps = XStackProps

const OrderItemSkeleton = ({ ...props }: OrderItemSkeletonProps) => {
  return (
    <XStack
      justifyContent="space-between"
      padding={15}
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="$pale"
      {...props}
    >
      <XStack gap={15}>
        <Skeleton width={88} height={88} />
        <YStack justifyContent="space-between">
          <YStack gap={5}>
            <Skeleton width={120} height={16} />
            <Skeleton width={120} height={16} />
          </YStack>
          <Skeleton width={120} height={24} />
        </YStack>
      </XStack>
    </XStack>
  )
}

export default OrderItemSkeleton

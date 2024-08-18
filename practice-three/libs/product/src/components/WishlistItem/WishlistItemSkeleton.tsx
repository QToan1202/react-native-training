import { XStack, XStackProps, YStack, getTokenValue } from 'tamagui'

import { Skeleton } from '@shared/components'

import { HeartFill } from '../../assets/images'

export type WishlistItemSkeletonProps = XStackProps

const WishlistItemSkeleton = ({ ...rest }: WishlistItemSkeletonProps) => (
  <XStack
    alignItems="center"
    animation="slow"
    enterStyle={{
      opacity: 0,
    }}
    exitStyle={{
      opacity: 0,
    }}
    {...rest}
  >
    <Skeleton
      width={getTokenValue('$wishlistImg.width')}
      height={getTokenValue('$wishlistImg.height')}
    />
    <YStack gap={8} marginLeft={18}>
      <Skeleton height={20} width={200} />
      <Skeleton height={15} width={200} />
    </YStack>
    <YStack gap={28} marginLeft="auto" alignItems="flex-end">
      <Skeleton height={28} />
      <Skeleton>
        <HeartFill />
      </Skeleton>
    </YStack>
  </XStack>
)

export default WishlistItemSkeleton

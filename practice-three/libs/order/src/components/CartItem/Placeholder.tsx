import { XStack, XStackProps, YStack, getTokenValue } from 'tamagui'

import { Skeleton } from '@practice-three/shared/ui'

type CartItemPlaceholderProps = XStackProps

const CartItemPlaceholder = ({ ...rest }: CartItemPlaceholderProps) => (
  <XStack
    borderRadius={5}
    borderWidth={1}
    borderColor="$pale"
    padding={16}
    justifyContent="space-between"
    animation="slow"
    enterStyle={{
      opacity: 0,
    }}
    exitStyle={{
      opacity: 0,
    }}
    {...rest}
  >
    <XStack>
      <Skeleton
        width={getTokenValue('$cartItem.width')}
        height={getTokenValue('$cartItem.height')}
      />
      <YStack gap={8} marginLeft={18} justifyContent="space-evenly">
        <Skeleton width={100} height={24} />
        <Skeleton width={100} height={20} />
      </YStack>
    </XStack>
    <YStack gap={8} justifyContent="space-between">
      <XStack justifyContent="flex-end">
        <Skeleton width={70} height={26} />
      </XStack>
      <Skeleton width={70} height={30} />
    </YStack>
  </XStack>
)

export default CartItemPlaceholder

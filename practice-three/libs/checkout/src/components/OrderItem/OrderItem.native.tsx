import { Heading, XStack, XStackProps, YStack } from 'tamagui'

import { IconButton, Image, Text } from '@practice-three/components'

import { TOrderItem } from '../../types'
import { ArrowRight } from '../../assets/images'

type TRemoveProps = 'address'
export type OrderItemProps = XStackProps &
  Omit<TOrderItem, TRemoveProps> & {
    receiver: string
  }

const OrderItem = ({
  id,
  image,
  name,
  date,
  size,
  quantity,
  price,
  brandName,
  receiver,
  ...rest
}: OrderItemProps) => {
  return (
    <XStack justifyContent="space-between" padding={15} {...rest}>
      <XStack flex={1} gap={15}>
        <Image
          borderRadius={5}
          source={{
            width: 88,
            height: 88,
            uri: image,
          }}
        />
        <YStack flex={1} justifyContent="space-between">
          <YStack gap={5}>
            <Heading ellipse color="$black" fontWeight="700" textTransform="capitalize">
              {name}
            </Heading>
            <XStack justifyContent="space-between" gap={5}>
              <Text flex={1} flexBasis={0} textTransform="capitalize">
                Size: {size}
              </Text>
              <Text flex={1} flexBasis={0} textTransform="capitalize">
                Qty: {quantity}
              </Text>
            </XStack>
          </YStack>
          <Text color="$primary" fontSize="$3" fontWeight="700">
            ${(price * quantity).toFixed(2)}
          </Text>
        </YStack>
      </XStack>
      <IconButton>
        <ArrowRight />
      </IconButton>
    </XStack>
  )
}

export default OrderItem

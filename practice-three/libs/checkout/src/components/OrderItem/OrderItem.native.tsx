import { Heading, XStack, XStackProps, YStack } from 'tamagui'

import { IconButton, Image, Text } from '@shared/components'

import { TOrderItem } from '../../types'
import { ArrowRight } from '../../assets/images'

type TRemoveProps = 'date' | 'address' | 'brandName' | 'totalPrice'
export type OrderItemProps = XStackProps & Omit<TOrderItem, TRemoveProps>

const OrderItem = ({ image, name, size, quantity, price, ...rest }: OrderItemProps) => {
  return (
    <XStack
      justifyContent="space-between"
      padding={15}
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="$pale"
      {...rest}
    >
      <XStack gap={15}>
        <Image
          borderRadius={5}
          source={{
            width: 88,
            height: 88,
            uri: image,
          }}
        />
        <YStack justifyContent="space-between">
          <YStack gap={5}>
            <Heading color="$black" fontWeight="700" textTransform="capitalize">
              {name}
            </Heading>
            <XStack>
              <Text flex={1} textTransform="capitalize">
                Size: {size}
              </Text>
              <Text flex={1} textTransform="capitalize">
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

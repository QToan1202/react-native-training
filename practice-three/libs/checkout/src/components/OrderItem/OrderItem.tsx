import { Heading, styled, XStack, XStackProps, YStack } from 'tamagui'
import dayjs from 'dayjs'

import { Button, Image, Text as BaseText } from '@shared/components'
import { TOrderItem } from '../../types'

type TRemoveProps = 'address'
export type OrderItemProps = XStackProps &
  Omit<TOrderItem, TRemoveProps> & {
    receiver: string
  }

const Text = styled(BaseText, {
  fontSize: '$3',
})

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
    <XStack
      justifyContent="space-between"
      padding={25}
      elevation={1}
      borderWidth={1}
      borderColor="$pale"
      {...rest}
    >
      <XStack gap={15}>
        <Image
          borderRadius={5}
          source={{
            width: 225,
            height: 250,
            uri: image,
          }}
        />
        <YStack justifyContent="space-between">
          <YStack gap={10}>
            <Heading color="$black" fontWeight="700" fontSize="$5" textTransform="capitalize">
              {name}
            </Heading>
            <Text textTransform="capitalize">{brandName}</Text>
            <Text marginBottom={5} textTransform="capitalize" fontSize="$5">
              ${(price * quantity).toFixed(2)}
            </Text>
            <Text>
              Order Placed on :&#32;
              <Text tag="span" color="$gray_100">
                {dayjs(date).format('D MMMM YYYY')}
              </Text>
            </Text>
            <Text textTransform="capitalize">
              Ship To :&#32;
              <Text tag="span" color="$gray_100">
                {receiver}
              </Text>
            </Text>
          </YStack>
          <XStack gap={20}>
            <Button
              title="add to cart"
              variant="outlined"
              fontSize="$3"
              paddingHorizontal={14}
              paddingVertical={6}
            />
            <Button
              title="cancel"
              variant="text"
              fontSize="$3"
              paddingHorizontal={14}
              paddingVertical={6}
            />
          </XStack>
        </YStack>
      </XStack>
      <YStack gap={10} alignItems="flex-start">
        <Text>
          Order Number :&#32;
          <Text tag="span" color="$gray_100">
            #{id}
          </Text>
        </Text>
        <Button title="View Order Details" variant="text" fontSize="$3" padding={0} />
      </YStack>
    </XStack>
  )
}

export default OrderItem

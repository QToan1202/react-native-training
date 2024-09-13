import { useMemo } from 'react'
import { H2, styled, XStack, YStack } from 'tamagui'

import { Text } from '@practice-three/shared/ui'

import { OrderItem, OrderItemSkeleton } from '../../components'
import { useFindProducts } from '../../hooks'
import { TOrderItem } from '../../types'

const Heading = styled(H2, {
  color: '$black',
  fontSize: '$6',
  fontWeight: 'bold',
  textTransform: 'capitalize',
})

const Order = () => {
  const [isLoading, data] = useFindProducts()
  const renderItem = useMemo(() => {
    if (isLoading) return [...Array(2).keys()].map((item) => <OrderItemSkeleton key={item} />)

    if (!data.length)
      return (
        <YStack alignItems="center" gap={12}>
          <H2 color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Order Found
          </H2>
          <Text>Seem like you don&#39;t have any orders yet. Make an order now&#33;</Text>
        </YStack>
      )

    return data.map((orderItem: TOrderItem) => {
      const {
        id,
        image,
        name,
        quantity,
        price,
        size,
        date,
        brandName,
        address: { firstName, lastName },
      } = orderItem
      const receiver = `${firstName} ${lastName}`
      const props = { id, image, name, quantity, price, size, date, brandName, receiver }

      return <OrderItem key={id} {...props} />
    })
  }, [data, isLoading])

  return (
    <YStack gap={32} flex={1} paddingVertical={56} paddingHorizontal={50}>
      <XStack gap={4} alignSelf="flex-start" alignItems="center">
        <Heading>
          my
          <Heading tag="span" color="$primary">
            &#32;orders
          </Heading>
        </Heading>
        <Text fontSize="$5">
          ({data.length > 1 ? `${data.length} items` : `${data.length} item`})
        </Text>
      </XStack>
      <YStack gap={20}>{renderItem}</YStack>
    </YStack>
  )
}

export default Order

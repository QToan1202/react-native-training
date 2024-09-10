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
    <YStack gap={32}>
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

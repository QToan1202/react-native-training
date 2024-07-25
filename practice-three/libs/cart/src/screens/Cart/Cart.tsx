import { Heading, YStack } from 'tamagui'
import { useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query'

import { CartStack, TCart, TProduct } from '@shared/types'
import { useAuthStore } from '@shared/stores'

import { CartItem } from '../../components'
import { findProductQuery, getCartQuery } from '../../hooks'
import { BaseInput } from '@shared/components'

type CartScreenProps = NativeStackScreenProps<CartStack, 'Cart'>

const Cart = ({ navigation }: CartScreenProps) => {
  const user = useAuthStore((state) => state.user)
  const { data: carts, isSuccess } = useQuery(getCartQuery('cart', user?.id || ''))
  const getProductsQuery = useQueries({
    queries: isSuccess ? carts.productId.map((item) => findProductQuery('/products', item)) : [],
  })
  const renderCartItems = useMemo(() => {
    return getProductsQuery.map((query: UseQueryResult<TProduct, Error>, index: number) => {
      const { quantity } = carts as TCart
      const { data: product, isSuccess: isGetProductSuccess } = query

      if (!isGetProductSuccess) return null
      const { id, name, price, image } = product
      return <CartItem id={id} name={name} price={price} image={image} quantity={quantity[index]} />
    })
  }, [carts, getProductsQuery])

  return (
    <YStack>
      <Heading color="$primary" fontSize="$3" fontWeight="700" textTransform="capitalize">
        Your Cart
      </Heading>
      {renderCartItems}
      <BaseInput placeholder="Enter Coupon Code" />
    </YStack>
  )
}

export default Cart

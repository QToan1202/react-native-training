import { Heading, YStack } from 'tamagui'
import { useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query'

import { CartStack, TCart, TProduct } from '@shared/types'
import { useAuthStore } from '@shared/stores'

import { CartItem } from '../../components'
import { findProductQuery, getCartQuery } from '../../hooks'
import { BaseInput } from '@shared/components'
import type { CartStack } from '@shared/types'

import { CartItem, CartItemSkeleton } from '../../components'
import { TUseFindProductsReturn, useFindProducts } from '../../hooks'
import { FEES } from '../../constants'

type CartScreenProps = NativeStackScreenProps<CartStack, 'Cart'>
const calculatePrice = (data: Partial<TUseFindProductsReturn>[]) => {
  return data.reduce((prev, curr) => {
    if (!curr?.price) return prev

    return (prev += curr.price)
  }, 0)
}

const Cart = ({ navigation }: CartScreenProps) => {
  const [isLoading, data] = useFindProducts()
  const renderCartItems = useMemo(
    () =>
      data.map((product: Partial<TUseFindProductsReturn>) => {
        const { id, name, price, image, quantity } = product

        if (!id || !name || !price || !image || !quantity) return null
        const foundProduct = product as TUseFindProductsReturn

        return (
          <CartItem
            animation="slow"
            enterStyle={{
              opacity: 0,
            }}
            exitStyle={{
              opacity: 0,
            }}
            key={foundProduct.id}
            {...foundProduct}
          />
        )
      }),
    [data]
  )

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

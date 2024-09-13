import { AnimatePresence } from 'tamagui'
import { memo, useContext, useMemo } from 'react'
import { useStore } from 'zustand'

import { TCartItem } from '@practice-three/shared/types'

import { CartItem } from '../CartItem'
import { CartContext } from '../../contexts'

const CartItemList = () => {
  const store = useContext(CartContext)
  const cart = useStore(store, (state) => state.cart)
  const renderListItem = useMemo(
    () =>
      cart.map((product: TCartItem) => (
        <CartItem
          animation="slow"
          enterStyle={{
            opacity: 0,
            x: -20,
          }}
          exitStyle={{
            opacity: 0.8,
            scale: 0.8,
          }}
          key={product.id}
          {...product}
        />
      )),
    [cart]
  )

  return <AnimatePresence>{renderListItem}</AnimatePresence>
}

export default memo(CartItemList)

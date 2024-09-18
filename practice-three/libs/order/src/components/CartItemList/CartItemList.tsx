import { AnimatePresence } from 'tamagui'
import { memo, useMemo } from 'react'

import { CartItem } from '../CartItem'
import { TOrderItem } from '../../types'

type CartItemListProps = {
  data: TOrderItem[]
}

const CartItemList = ({ data }: CartItemListProps) => {
  const renderListItem = useMemo(
    () =>
      data.map((product: TOrderItem) => (
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
    [data]
  )

  return <AnimatePresence>{renderListItem}</AnimatePresence>
}

export default memo(CartItemList)

import { memo, useCallback, useMemo } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { getTokenValue } from 'tamagui'

import LoveIcon from '@assets/love.svg'
import CartIcon from '@assets/cart.svg'

import Search from '../../../Search'
import IconButton from '../../../IconButton'
import Bar from '../../index'

const HomeBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
  const handleNavigateToCart = useCallback(
    () => navigation.navigate('HomeStack', { screen: 'Cart' }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const handleNavigateToWishlist = useCallback(
    () => navigation.navigate('HomeStack', { screen: 'Wishlist' }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const IconList = useMemo(
    () => (
      <>
        <IconButton noBackground onPress={handleNavigateToWishlist}>
          <LoveIcon fill={getTokenValue('$color.white')} />
        </IconButton>
        <IconButton noBackground onPress={handleNavigateToCart}>
          <CartIcon fill={getTokenValue('$color.white')} />
        </IconButton>
      </>
    ),
    [handleNavigateToCart, handleNavigateToWishlist]
  )

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      IconList={IconList}
      align="space-between"
    >
      <Search placeholder="Search Product" />
    </Bar>
  )
}

export default memo(HomeBar)

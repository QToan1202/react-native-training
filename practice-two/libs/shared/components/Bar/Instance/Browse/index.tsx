import { memo, useCallback, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { XStack, YStack, getTokenValue } from 'tamagui'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import LoveIcon from '@assets/love.svg'
import CartIcon from '@assets/cart.svg'

import Button, { ButtonProps } from '../../../Button'
import Search from '../../../Search'
import IconButton from '../../../IconButton'
import Bar from '../../index'
import styles from './styles'

const BrowseBar = ({ navigation, options, route }: NativeStackHeaderProps) => {
  const handleNavigateToCart = useCallback(
    () => navigation.navigate('HomeStack', { screen: 'CheckoutStack', params: { screen: 'Cart' } }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const handleNavigateToWishlist = useCallback(
    () =>
      navigation.navigate('HomeStack', { screen: 'CheckoutStack', params: { screen: 'Wishlist' } }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const handlePress = () => {
    throw new Error('Function not implemented.')
  }
  const renderButton = useCallback(
    ({ title, leftIcon, onPress }: ButtonProps) => (
      <Button
        title={title}
        variant="tertiary"
        shrink
        style={styles.btn}
        leftIcon={leftIcon}
        onPress={onPress}
      />
    ),
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
      <YStack flex={1} space={28}>
        <Search placeholder="Search Product" />
        <XStack space={4} alignItems="center">
          {renderButton({
            title: 'sort by',
            leftIcon: require('@assets/sort.png'),
            onPress: handlePress,
          })}
          {renderButton({
            title: 'location',
            leftIcon: require('@assets/maps.png'),
            onPress: handlePress,
          })}
          {renderButton({
            title: 'category',
            leftIcon: require('@assets/category.png'),
            onPress: handlePress,
          })}
        </XStack>
      </YStack>
    </Bar>
  )
}

export default memo(BrowseBar, isEqual)

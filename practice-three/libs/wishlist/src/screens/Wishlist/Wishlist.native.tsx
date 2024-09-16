import { useCallback, useMemo } from 'react'
import { Heading, YStack } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { TUser, TWishlistExpand, WishlistTabScreenProps } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { Button, Text } from '@practice-three/shared/ui'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { getWishlistQuery } from '../../hooks'
import { WishlistItem, WishlistItemSkeleton } from '../../components'

type WishlistScreenProps = WishlistTabScreenProps<'Wishlist'>

const Wishlist = ({ navigation }: WishlistScreenProps) => {
  const user: TUser | undefined = useAuthStore((state) => state.user)
  const {
    data: wishlists,
    isPending,
    isSuccess,
  } = useQuery(getWishlistQuery(ENDPOINTS.WISHLIST, user?.id || '', true))
  const handlePressProductCard = useCallback((id: string) => {
    navigation.navigate('ProductDetail', { id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handlePressLink = useCallback(
    () => navigation.navigate('ProductTab', { screen: 'Search' }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const renderProducts = useMemo(() => {
    if (isPending) return [...Array(4).keys()].map((item) => <WishlistItemSkeleton key={item} />)
    if (!isSuccess) return
    if (!wishlists.length)
      return (
        <YStack alignItems="center" gap={12}>
          <Text fontSize="$3">
            Your wishlist is currently empty. Start adding items to make your dreams come true!
          </Text>
          <Button title="Start Shopping" onPress={handlePressLink} />
        </YStack>
      )

    return wishlists.map(
      ({
        product: {
          description,
          sellerName,
          sizes,
          reviews,
          specifications,
          rating,
          discountPercent,
          id,
          images,
          ...rest
        },
      }: TWishlistExpand) => (
        <WishlistItem
          key={id}
          id={id}
          image={images[0]}
          {...rest}
          onPressItem={handlePressProductCard}
          flex={1}
        />
      )
    )
  }, [isPending, isSuccess, wishlists, handlePressLink, handlePressProductCard])
  const handleAddWishlistItems = useCallback(() => {
    throw new Error('Function not implement')
  }, [])

  return (
    <YStack justifyContent="center" gap={12}>
      <Heading fontSize="$3" color="$primary" textTransform="capitalize">
        wishlist
      </Heading>
      {renderProducts}
      {wishlists?.length && <Button title="add all to cart" onPress={handleAddWishlistItems} />}
    </YStack>
  )
}

export default Wishlist

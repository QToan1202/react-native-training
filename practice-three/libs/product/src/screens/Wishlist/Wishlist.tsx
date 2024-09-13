import { useCallback, useMemo } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { H2, styled, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { QueryClient, useQuery } from '@tanstack/react-query'

import { ProductStack, TUser, TWishlistExpand } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'
import { TResolveLoaderReturn } from '@practice-three/shared/util'
import { Button, Text } from '@practice-three/shared/ui'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { getWishlistQuery } from '../../hooks'
import { ProductCard, ProductCardSkeleton } from '../../components'
import { ROUTER_PATHS } from '../../constants'

type WishlistScreenProps = Partial<NativeStackScreenProps<ProductStack, 'Wishlist'>>

const Heading = styled(H2, {
  color: '$black',
  fontSize: '$6',
  fontWeight: 'bold',
  textTransform: 'capitalize',
})

export const wishlistLoader = (queryClient: QueryClient) => async () => {
  const user: TUser | undefined = useAuthStore.getState().user
  queryClient.ensureQueryData(getWishlistQuery(ENDPOINTS.WISHLIST, user?.id || '', true))

  return { userId: user?.id }
}

const Wishlist = (props: WishlistScreenProps) => {
  const { userId } = useLoaderData() as TResolveLoaderReturn<typeof wishlistLoader>
  const navigate = useNavigate()
  const {
    data: wishlists,
    isPending,
    isSuccess,
  } = useQuery(getWishlistQuery(ENDPOINTS.WISHLIST, userId || '', true))
  const handlePressProductCard = useCallback((id: string) => {
    navigate(ROUTER_PATHS.PRODUCT_DETAIL.DYNAMIC(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handlePressLink = useCallback(
    () => navigate(ROUTER_PATHS.SEARCH),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const renderProducts = useMemo(() => {
    if (isPending) return [...Array(4).keys()].map((item) => <ProductCardSkeleton key={item} />)
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

    return (
      <XStack
        flexWrap="wrap"
        alignSelf="flex-start"
        justifyContent="space-between"
        columnGap={60}
        rowGap={52}
      >
        {wishlists.map(
          ({
            product: { description, sellerName, sizes, reviews, specifications, id, ...rest },
          }: TWishlistExpand) => (
            <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
          )
        )}
      </XStack>
    )
  }, [isPending, isSuccess, wishlists, handlePressLink, handlePressProductCard])

  return (
    <YStack
      justifyContent="center"
      alignItems="center"
      gap={26}
      paddingVertical={56}
      paddingHorizontal={50}
    >
      <XStack gap={4} alignSelf="flex-start">
        <Heading>
          my
          <Heading tag="span" color="$primary">
            &#32;wishlist
          </Heading>
        </Heading>
      </XStack>
      {renderProducts}
    </YStack>
  )
}

export default Wishlist

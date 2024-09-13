import { useMemo } from 'react'
import { FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Heading, YStack } from 'tamagui'
import { useToastController } from '@tamagui/toast'
import { useNavigation } from '@react-navigation/native'

import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { getProductsQuery, useAddToCart, useAddToWishlist } from '../../../hooks'
import { ProductShowcase, ProductShowcaseSkeleton } from '../../ProductShowcase'

const Product = () => {
  const navigation = useNavigation()
  const user = useAuthStore((state) => state.user)
  const { data: products, isPending: isGettingProduct } = useQuery(
    getProductsQuery(ENDPOINTS.PRODUCT)
  )
  const toast = useToastController()
  const { mutate: addToCart, isPending: isAddingProductToCart } = useAddToCart(
    ENDPOINTS.CART,
    user?.id || ''
  )
  const handleOnAddProduct = (size: string, color: string) => (id: string) => {
    addToCart(
      { id, color, size },
      {
        onSuccess: () => {
          toast.show(`Product have add to cart`, {
            message: `You have successfully added product to cart!`,
          })
        },
        onError: () => {
          toast.show(`Something went wrong`, {
            message: `Can't not add product to cart. Please try again later.`,
          })
        },
      }
    )
  }
  const { mutate: addToWishlist, isPending: isAddingProductToWishlist } = useAddToWishlist(
    ENDPOINTS.WISHLIST,
    user?.id || ''
  )
  const handleAddProductToWishlist = (id: string) => {
    addToWishlist(
      { productId: id },
      {
        onSuccess: () => {
          toast.show(`Product have add to wishlist`, {
            message: `You have successfully added product to wishlist!`,
          })
        },
        onError: (error: Error) => {
          toast.show(`Something went wrong`, {
            message: error.message || `Can't not add product to wishlist. Please try again later.`,
          })
        },
      }
    )
  }
  const handleNavigateToProduct = (id: string) => {
    navigation.navigate('BottomTabs', {
      screen: 'ProductTab',
      params: { screen: 'ProductDetail', params: { id } },
    })
  }

  const renderListProducts = useMemo(() => {
    if (isGettingProduct)
      return (
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ gap: 10 }}
          data={[...Array(3).keys()]}
          renderItem={() => <ProductShowcaseSkeleton />}
        />
      )

    return (
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{ gap: 10 }}
        data={products}
        renderItem={({
          item: { description, sellerName, sizes, reviews, specifications, rating, ...rest },
        }) => (
          <ProductShowcase
            {...rest}
            // Since add product at Home screen so the first size will be selected
            isDisabledActions={isAddingProductToCart || isAddingProductToWishlist}
            onPressProduct={handleNavigateToProduct}
            onAddProductToCart={handleOnAddProduct(sizes[0], specifications.color)}
            onAddProductToWishlist={handleAddProductToWishlist}
          />
        )}
      />
    )
  }, [isGettingProduct, products])

  return (
    <YStack gap={18}>
      <Heading color="$black" fontSize="$4" fontWeight="500">
        Our Collection
      </Heading>
      {renderListProducts}
    </YStack>
  )
}

export default Product

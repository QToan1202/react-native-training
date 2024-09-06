import { useMemo } from 'react'
import { FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Heading, YStack } from 'tamagui'

import { getProductsQuery } from '../../../hooks'
import { ProductShowcase, ProductShowcaseSkeleton } from '../../ProductShowcase'

const Product = () => {
  const { data: products, isPending: isGettingProduct } = useQuery(getProductsQuery('/products'))

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
        }) => <ProductShowcase {...rest} />}
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

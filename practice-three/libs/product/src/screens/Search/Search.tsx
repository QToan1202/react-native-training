import { useMemo } from 'react'
import { H2, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ProductStack, TProduct } from '@shared/types'

import { Filter, ProductCard, ProductCardSkeleton } from '../../components'
import { useGetProducts } from '../../hooks'
import { getBrands, getColors, getDiscounts, getMinMaxPrices } from '@shared/utils'
import { Text } from '@shared/components'

export type SearchProps = Partial<NativeStackScreenProps<ProductStack, 'Search'>>

const Search = (props: SearchProps) => {
  const { data, isLoading, isSuccess } = useGetProducts('/products')
  const products = useMemo(() => (isSuccess ? data : []), [isSuccess, data])
  const [minPrice, maxPrice] = getMinMaxPrices(products)
  const brands = getBrands(products)
  const colors = getColors(products)
  const discounts = getDiscounts(products)
  const renderProduct = useMemo(() => {
    if (isLoading) return [...Array(4).keys()].map((item) => <ProductCardSkeleton key={item} />)
    if (!isSuccess) return
    if (!data.length)
      return (
        <YStack alignItems="center" gap={12} fullscreen>
          <H2 color="$black" fontSize="$5" fontWeight="bold" textAlign="center">
            No Products Found
          </H2>
          <Text>We couldn't find any products that match your search.</Text>
        </YStack>
      )

    return data.map(
      ({ description, sellerName, sizes, reviews, specifications, id, ...rest }: TProduct) => (
        <ProductCard key={id} {...rest} />
      )
    )
  }, [data, isLoading, isSuccess])

  return (
    <XStack padding={50} gap={43}>
      <Filter
        min={minPrice}
        max={maxPrice}
        brandNames={brands}
        colors={colors}
        discountPercent={discounts}
        width={460}
      />
      <XStack flex={1} flexWrap="wrap" alignSelf="flex-start" gap={12}>
        {renderProduct}
      </XStack>
    </XStack>
  )
}

export default Search

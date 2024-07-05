import { XStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ProductStack, TProduct } from '@shared/types'

import { Filter, ProductCard } from '../../components'
import { useGetProducts } from '../../hooks'
import React, { useMemo } from 'react'
import { getBrands, getColors, getDiscounts, getMinMaxPrices } from '@shared/utils'

export type SearchProps = Partial<NativeStackScreenProps<ProductStack, 'Search'>>

const Search = (props: SearchProps) => {
  const { data, isLoading, isSuccess } = useGetProducts('/products')
  const products = useMemo(() => (isSuccess ? data : []), [isSuccess, data])
  const [minPrice, maxPrice] = getMinMaxPrices(products)
  const brands = getBrands(products)
  const colors = getColors(products)
  const discounts = getDiscounts(products)
  const renderProduct = useMemo(() => {
    if (isLoading) return
    if (!isSuccess) return

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
      <XStack flex={1} flexWrap="wrap" gap={12}>
        {renderProduct}
      </XStack>
    </XStack>
  )
}

export default Search

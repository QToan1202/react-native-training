import { useMemo } from 'react'
import { H2, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLocation } from 'react-router-dom'

import { ProductStack, TProduct } from '@shared/types'
import { Text } from '@shared/components'

import { Filter, ProductCard, ProductCardSkeleton } from '../../components'
import { useGetProducts } from '../../hooks'

export type SearchProps = Partial<NativeStackScreenProps<ProductStack, 'Search'>>

const Search = (props: SearchProps) => {
  const { search } = useLocation()
  const { data, isPending, isSuccess } = useGetProducts(
    `/products${search.startsWith('?') ? search : `?${search}`}`
  )
  const renderProduct = useMemo(() => {
    if (isPending) return [...Array(4).keys()].map((item) => <ProductCardSkeleton key={item} />)
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
  }, [data, isPending, isSuccess])

  return (
    <XStack padding={50} gap={43}>
      <Filter width={460} isDisabled={isPending} />
      <XStack flex={1} flexWrap="wrap" alignSelf="flex-start" gap={12}>
        {renderProduct}
      </XStack>
    </XStack>
  )
}

export default Search

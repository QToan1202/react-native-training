import { useMemo } from 'react'
import { H2, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom'
import type { QueryClient } from '@tanstack/react-query'

import { ProductStack, TProduct } from '@shared/types'
import { Text } from '@shared/components'
import { TResolveLoaderReturn } from '@shared/utils'

import { Filter, ProductCard, ProductCardSkeleton } from '../../components'
import { useGetProducts, getProductsQuery } from '../../hooks'

export type SearchProps = Partial<NativeStackScreenProps<ProductStack, 'Search'>>

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const searchQuery = new URL(request.url).search
    const path = `/products${searchQuery}`
    await queryClient.ensureQueryData(getProductsQuery(path))

    return { path }
  }

const Search = (props: SearchProps) => {
  const { path } = useLoaderData() as TResolveLoaderReturn<typeof loader>
  const { data, isPending, isSuccess } = useGetProducts(path)
  const handlePressProductCard = (id: string) => {
    redirect(`/product/${id}`)
  }
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
        <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
      )
    )
  }, [data, isPending, isSuccess])

  return (
    <XStack padding={50} gap={43}>
      <Filter backgroundColor="$pure_white" width={460} isDisabled={isPending} />
      <XStack flex={1} flexWrap="wrap" alignSelf="flex-start" gap={12}>
        {renderProduct}
      </XStack>
    </XStack>
  )
}

export default Search

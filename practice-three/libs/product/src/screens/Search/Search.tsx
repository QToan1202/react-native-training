import { useId, useMemo, useState } from 'react'
import { AnimatePresence, H2, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom'
import type { QueryClient } from '@tanstack/react-query'

import { ProductStack, TProduct } from '@shared/types'
import { Button, Text } from '@shared/components'
import { TResolveLoaderReturn } from '@shared/utils'

import { Filter, ProductCard, ProductCardSkeleton } from '../../components'
import { useGetProducts, getProductsQuery } from '../../hooks'
import { DownArrow, Filter as FilterIcon } from '../../assets/images'
import { SortModal } from '../../components/SortModal'

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
  const [isShowFilterPanel, setShowFilterPanel] = useState<boolean>(false)
  const [isShowSortModal, setShowSortModal] = useState<boolean>(false)
  const filterPanel = useId()
  const sortModal = useId()
  const handleToggleFilterPanel = () => setShowFilterPanel((filterShown) => !filterShown)
  const handleToggleSortModal = () => setShowSortModal((modalShown) => !modalShown)

  return (
    <XStack gap={43}>
      <AnimatePresence>
        {isShowFilterPanel && (
          <Filter
            key={filterPanel}
            animation="slow"
            enterStyle={{ opacity: 0, x: '-100%' }}
            exitStyle={{ opacity: 0, x: '-100%' }}
            backgroundColor="$pure_white"
            width={460}
            isDisabled={isPending}
          />
        )}
      </AnimatePresence>
      <YStack flex={1} justifyContent="center">
        <XStack alignSelf="flex-end">
          <Button
            title="Filter"
            variant="text"
            color="$black"
            onPress={handleToggleFilterPanel}
            endIcon={<FilterIcon />}
          />
          <Button
            title="Sort By "
            variant="text"
            color="$black"
            onPress={handleToggleSortModal}
            endIcon={<DownArrow />}
          />
          <AnimatePresence initial={false}>
            {isShowSortModal && (
              <SortModal
                key={sortModal}
                animation="slow"
                enterStyle={{ opacity: 0, y: '-100%' }}
                exitStyle={{ opacity: 0, y: '-100%' }}
              />
            )}
          </AnimatePresence>
        </XStack>
        <XStack flexWrap="wrap" justifyContent="flex-start" gap={12}>
          {renderProduct}
        </XStack>
      </YStack>
    </XStack>
  )
}

export default Search

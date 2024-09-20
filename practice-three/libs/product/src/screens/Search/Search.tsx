import { useCallback, useId, useMemo, useState } from 'react'
import { AnimatePresence, H2, XStack, YStack } from 'tamagui'
import { LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom'
import type { QueryClient } from '@tanstack/react-query'

import { TProduct } from '@practice-three/shared/types'
import { Button, Text } from '@practice-three/shared/ui'
import { TResolveLoaderReturn } from '@practice-three/shared/util'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { Filter, ProductCard, ProductCardSkeleton, SortModal } from '../../components'
import { useGetProducts, getProductsQuery } from '../../hooks'
import { DownArrow, Filter as FilterIcon } from '../../assets/images'
import { ROUTER_PATHS } from '../../constants'

export const searchLoader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const searchQuery = new URL(request.url).search
    const path = `/${ENDPOINTS.PRODUCT}${searchQuery}`
    await queryClient.ensureQueryData(getProductsQuery(path))

    return { path }
  }

const Search = () => {
  const navigate = useNavigate()
  const { path } = useLoaderData() as TResolveLoaderReturn<typeof searchLoader>
  const { data, isPending, isSuccess } = useGetProducts(path)
  const handlePressProductCard = useCallback(
    (id: string) => navigate(ROUTER_PATHS.PRODUCT_DETAIL.DYNAMIC(id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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
        <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
      )
    )
  }, [data, handlePressProductCard, isPending, isSuccess])
  const [isShowFilterPanel, setShowFilterPanel] = useState<boolean>(false)
  const [isShowSortModal, setShowSortModal] = useState<boolean>(false)
  const handleToggleFilterPanel = () => setShowFilterPanel((filterShown) => !filterShown)
  const handleToggleSortModal = () => setShowSortModal((modalShown) => !modalShown)

  return (
    <XStack gap={43} paddingVertical={56} paddingHorizontal={50} backgroundColor="$white">
      {isShowFilterPanel && (
        <Filter backgroundColor="$pure_white" width={460} isDisabled={isPending} />
      )}
      <YStack alignSelf="flex-start" flex={1} justifyContent="center">
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
          {isShowSortModal && <SortModal />}
        </XStack>
        <XStack flexWrap="wrap" justifyContent="flex-start" gap={12}>
          {renderProduct}
        </XStack>
      </YStack>
    </XStack>
  )
}

export default Search

import { useQuery } from '@tanstack/react-query'
import { useToastController } from '@tamagui/toast'

import { getProductsQuery } from '../../../hooks'
import { ProductCard, ProductCardSkeleton } from '../../ProductCard'
import { TProduct } from '@practice-three/shared/types'
import { useNavigate } from 'react-router-dom'

const Trending = () => {
  const {
    data: products,
    isPending,
    error,
  } = useQuery(getProductsQuery('products', { params: { _page: 1, _limit: 5 } }))
  const toast = useToastController()
  const navigate = useNavigate()

  if (error)
    return toast.show('Error when getting trending products', {
      message: 'Unable to fetch data. Please try again later.',
    })

  if (isPending) return [...Array(5).keys()].map((item) => <ProductCardSkeleton key={item} />)

  const handlePressProductCard = (id: string) => navigate(`/product/${id}`)

  return products.map(
    ({ description, sellerName, sizes, reviews, specifications, id, ...rest }: TProduct) => (
      <ProductCard key={id} id={id} {...rest} onPressCard={handlePressProductCard} />
    )
  )
}

export default Trending

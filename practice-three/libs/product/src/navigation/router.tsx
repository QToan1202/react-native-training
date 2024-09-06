import { RouteObject } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import {
  ProductDetailScreen,
  SearchScreen,
  WishlistScreen,
  productLoader,
  searchLoader,
  wishlistLoader,
} from '../screens'

const queryClient = new QueryClient()

const productRouter: RouteObject[] = [
  {
    path: '/search',
    element: <SearchScreen />,
    loader: searchLoader(queryClient),
  },
  {
    path: '/product/:id',
    element: <ProductDetailScreen />,
    loader: productLoader(queryClient),
  },
  {
    path: '/wishlist',
    element: <WishlistScreen />,
    loader: wishlistLoader(queryClient),
  },
]

export default productRouter

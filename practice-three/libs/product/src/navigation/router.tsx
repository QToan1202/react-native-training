import { RouteObject } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import {
  ProductDetailScreen,
  SearchScreen,
  WishlistScreen,
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
  },
  {
    path: '/wishlist',
    element: <WishlistScreen />,
    loader: wishlistLoader(queryClient),
  },
]

export default productRouter

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
import { ROUTER_PATHS } from '../constants'

const queryClient = new QueryClient()

const productRouter: RouteObject[] = [
  {
    path: ROUTER_PATHS.SEARCH,
    element: <SearchScreen />,
    loader: searchLoader(queryClient),
  },
  {
    path: ROUTER_PATHS.PRODUCT_DETAIL.STATIC,
    element: <ProductDetailScreen />,
    loader: productLoader(queryClient),
  },
  {
    path: ROUTER_PATHS.WISHLIST,
    element: <WishlistScreen />,
    loader: wishlistLoader(queryClient),
  },
]

export default productRouter

import { RouteObject } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { ProductDetailScreen, SearchScreen, productLoader, searchLoader } from '../screens'
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
]

export default productRouter

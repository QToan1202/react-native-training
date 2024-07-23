import { RouteObject } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { ProductDetailScreen, SearchScreen, loader as searchLoader } from '../screens'

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
]

export default productRouter

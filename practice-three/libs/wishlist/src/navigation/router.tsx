import { RouteObject } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { WishlistScreen, wishlistLoader } from '../screens'
import { ROUTER_PATHS } from '../constants'

const queryClient = new QueryClient()

const productRouter: RouteObject[] = [
  {
    path: ROUTER_PATHS.WISHLIST,
    element: <WishlistScreen />,
    loader: wishlistLoader(queryClient),
  },
]

export default productRouter

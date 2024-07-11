import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { SearchScreen, loader as searchLoader } from '../screens'

const queryClient = new QueryClient()

const productRouter = createBrowserRouter([
  {
    path: '/search',
    element: <SearchScreen />,
    loader: searchLoader(queryClient),
  },
])

const ProductRouterProvider = () => <RouterProvider router={productRouter} />

export default ProductRouterProvider

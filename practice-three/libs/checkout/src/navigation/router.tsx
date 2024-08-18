import { RouteObject } from 'react-router-dom'

import { OrderScreen } from '../screens'

const checkoutRouter: RouteObject[] = [
  {
    path: '/orders',
    index: true,
    element: <OrderScreen />,
  },
]

export default checkoutRouter

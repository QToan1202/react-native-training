import { RouteObject } from 'react-router-dom'

import { OrderScreen } from '../screens'

const checkoutRouter: RouteObject[] = [
  {
    path: '/orders',
    element: <OrderScreen />,
  },
]

export default checkoutRouter

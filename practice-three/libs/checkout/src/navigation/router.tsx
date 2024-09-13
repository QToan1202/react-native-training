import { RouteObject } from 'react-router-dom'

import { OrderScreen } from '../screens'
import { ROUTER_PATHS } from '../constants'

const checkoutRouter: RouteObject[] = [
  {
    path: ROUTER_PATHS.ORDER,
    element: <OrderScreen />,
  },
]

export default checkoutRouter

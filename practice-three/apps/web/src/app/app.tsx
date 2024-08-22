import { ReactNode } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'

import { featureShell } from '@practice-three/shell'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { THOCsProps } from '@practice-three/types'
import { withCheckout } from '@practice-three/features/checkout'
import { NotFoundScreen } from '@practice-three/screens'

import { RootLayout } from '../layout'
import { ErrorPage } from '../pages'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []
const routerLayout: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFoundScreen />,
      },
    ],
  },
]

const initFeatures = featureShell(import.meta.env.VITE_FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withCheckout(withProduct(withAuth(BaseApp)))

const App = () => (
  <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
    {(props) => {
      const getLayoutRoute = routerLayout.at(0)

      if (!getLayoutRoute || !getLayoutRoute.children) throw new Error('Missing base route data')

      const mergeChildren = [...getLayoutRoute.children, ...props.navigatorData]
      getLayoutRoute.children = mergeChildren
      const router = createBrowserRouter(routerLayout)

      return <RouterProvider router={router} />
    }}
  </WrapHOC>
)

export default App

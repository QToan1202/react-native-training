'use client'

import { ReactNode } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import { withErrorBoundary } from 'react-error-boundary'

import { featureShell } from '@practice-three/shell'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { THOCsProps } from '@practice-three/types'
import { withCheckout } from '@practice-three/features/checkout'
import { ErrorScreen, NotFoundScreen } from '@practice-three/screens'

import { RootLayout } from '../layout'
import { ErrorPage } from '../pages'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = {}
const routerLayout: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]

const initFeatureCategories = featureShell(import.meta.env.VITE_FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withCheckout(withProduct(withAuth(BaseApp)))

const App = () => (
  <WrapHOC category={initFeatureCategories} navigatorData={INIT_NAVIGATOR_DATA}>
    {({ navigatorData }) => {
      const getLayoutRoute = routerLayout.at(0)
      const featureRoute = Object.keys(navigatorData).reduce<RouteObject[]>(
        (routeData: RouteObject[], featureName: string) =>
          routeData.concat(navigatorData[featureName]),
        []
      )

      if (!getLayoutRoute || !getLayoutRoute.children) throw new Error('Missing base route data')

      getLayoutRoute.children = [...getLayoutRoute.children, ...featureRoute]
      const router = createBrowserRouter(routerLayout)

      return <RouterProvider router={router} />
    }}
  </WrapHOC>
)

export default withErrorBoundary(App, { fallbackRender: ErrorScreen })

'use client'

import { ReactNode } from 'react'
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router-dom'
import { withErrorBoundary } from 'react-error-boundary'

import { AUTH_FEATURE, featureShell } from '@practice-three/shell'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { THOCsProps } from '@practice-three/shared/types'
import { withCheckout } from '@practice-three/features/checkout'
import { ErrorScreen, NotFoundScreen } from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'

import { RootLayout } from '../layout'
import { ErrorPage, HomePage } from '../pages'

const authLoader = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (isAuthenticated) return redirect('/')

  return null
}

const protectedLoader = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (!isAuthenticated) return redirect('/login')

  return null
}

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = {}
const routerLayout: RouteObject[] = [
  {
    path: '/',
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
      const publicRoute = navigatorData[AUTH_FEATURE]
      const protectedRoute = Object.keys(navigatorData).reduce<RouteObject[]>(
        (routeData: RouteObject[], featureName: string) =>
          featureName !== AUTH_FEATURE ? routeData.concat(navigatorData[featureName]) : routeData,
        []
      )

      if (!getLayoutRoute || !getLayoutRoute.children) throw new Error('Missing base route data')

      const merge: RouteObject[] = [
        {
          loader: authLoader,
          children: [...publicRoute],
        },
        {
          loader: protectedLoader,
          element: <RootLayout />,
          children: [{ index: true, element: <HomePage /> }, ...protectedRoute],
        },
      ]

      getLayoutRoute.children = [...getLayoutRoute.children, ...merge]
      const router = createBrowserRouter(routerLayout)

      return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    }}
  </WrapHOC>
)

export default withErrorBoundary(App, { fallbackRender: ErrorScreen })

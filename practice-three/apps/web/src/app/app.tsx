import { ReactNode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { featureShell } from '@practice-three/shell'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { THOCsProps } from '@practice-three/types'
import { withCheckout } from '@practice-three/features/checkout'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []

const initFeatures = featureShell(import.meta.env.VITE_FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withCheckout(withProduct(withAuth(BaseApp)))

const App = () => (
  <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
    {(props) => {
      const router = createBrowserRouter(props.navigatorData)

      return <RouterProvider router={router} />
    }}
  </WrapHOC>
)

export default App

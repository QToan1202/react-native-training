import { ReactNode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { featureShell } from 'shell'
import { withAuth } from '@features/authentication'
import { withProduct } from '@features/product'
import { THOCsProps } from '@shared/types'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []

const initFeatures = featureShell(import.meta.env.VITE_FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withProduct(withAuth(BaseApp))

const App = () => (
  <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
    {(props) => {
      const router = createBrowserRouter(props.navigatorData)

      return <RouterProvider router={router} />
    }}
  </WrapHOC>
)

export default App

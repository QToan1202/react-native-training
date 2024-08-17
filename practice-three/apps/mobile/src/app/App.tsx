import { ReactNode } from 'react'

import { featureShell } from '@practice-three/shell'
import { THOCsProps } from '@practice-three/types'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { withCart } from '@practice-three/features/cart'
import { withCheckout } from '@practice-three/features/checkout'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []
const initFeatures = featureShell(process.env.FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withCheckout(withCart(withProduct(withAuth(BaseApp))))

export const App = () => {
  return (
    <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
      {({ navigatorData }) => {
        const navigator = navigatorData as unknown as (() => ReactNode)[]

        return navigator.map((Item, index) => <Item key={index} />)
      }}
    </WrapHOC>
  )
}

export default App

import { ReactNode } from 'react'

import { featureShell } from 'shell'
import { THOCsProps } from '@shared/types'
import { withAuth } from '@features/authentication'
import { withProduct } from '@features/product'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []
const initFeatures = featureShell(process.env.FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withProduct(withAuth(BaseApp))

export const App = () => {
  return (
    <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
      {(props) => props.navigatorData.map((Item, index) => <Item key={index} />)}
    </WrapHOC>
  )
}

export default App

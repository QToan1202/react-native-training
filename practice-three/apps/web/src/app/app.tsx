import { ReactNode } from 'react'

import { featureShell } from 'shell'
import { withAuth } from '@features/authentication'
import { THOCsProps } from '@shared/types'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = []

const initFeatures = featureShell(process.env.FEATURES as string)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => ReactNode }) => children?.(rest)
const WrapHOC = withAuth(BaseApp)

const App = () => (
  <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
    {(props) => props.navigatorData.map((Item, index) => <Item key={index} />)}
  </WrapHOC>
)

export default App

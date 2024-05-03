import { ComponentType, forwardRef } from 'react'

import { THOCsProps } from '@shared/types'
import { isWeb } from 'tamagui'
import { MobileAuthenticationStack, webAuthenticationStack } from '../navigation'

export const withAuth = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { navigatorData, ...rest } = props
    //TODO: Check if feature available merge Navigator if not render unavailable screen
    const mergeNavigator = [
      ...navigatorData,
      isWeb ? webAuthenticationStack : MobileAuthenticationStack,
    ]

    return <Wrapper ref={componentRef} {...(rest as T)} navigatorData={mergeNavigator} />
  })
}

export default withAuth

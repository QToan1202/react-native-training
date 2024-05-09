import { ComponentType, forwardRef } from 'react'
import { isWeb } from 'tamagui'

import { THOCsProps } from '@shared/types'
import { featureShell } from 'shell'

import { AuthenticationRoute } from '../navigation'

const FEATURE_NAME = 'authentication'

export const withAuth = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { navigatorData, ...rest } = props
    const featureAuth = featureShell.find(
      (feat) => !feat.name.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )

    //TODO: Check if feature don't exist in feature init shell
    if (!featureAuth) return null

    const mergeNavigator = [...navigatorData, AuthenticationRoute]

    return <Wrapper ref={componentRef} {...(rest as T)} navigatorData={mergeNavigator} />
  })
}

export default withAuth

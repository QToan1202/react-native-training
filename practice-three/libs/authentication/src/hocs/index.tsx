import { ComponentType, forwardRef } from 'react'

import { THOCsProps } from '@shared/types'

import { AuthenticationRoute } from '../navigation'

const FEATURE_NAME = 'authentication'

export const withAuth = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const featureAuth = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )

    //TODO: Check if feature don't exist in feature init shell
    if (!featureAuth) return null

    const mergeNavigator = [...navigatorData, AuthenticationRoute]

    return <Wrapper ref={componentRef} {...(rest as T)} navigatorData={mergeNavigator} />
  })
}

export default withAuth

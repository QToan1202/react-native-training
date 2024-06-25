import { ComponentType, forwardRef } from 'react'

import { THOCsProps } from '@shared/types'

import { AuthenticationRoute } from '../navigation'

const FEATURE_NAME = 'authentication'

export const withAuth = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        navigatorData={isFeatureActive ? [...navigatorData, AuthenticationRoute] : navigatorData}
      />
    )
  })
}

export default withAuth

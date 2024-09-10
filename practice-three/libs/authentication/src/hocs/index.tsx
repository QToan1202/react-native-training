import { ComponentType, forwardRef } from 'react'
import { isWeb } from 'tamagui'

import { THOCsProps } from '@practice-three/shared/types'
import { AUTH_FEATURE } from '@practice-three/shell'

import { AuthenticationRoute } from '../navigation'

const FEATURE_NAME = AUTH_FEATURE

export const withAuth = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )
    const convertAuthRoute = isWeb
      ? AuthenticationRoute
      : (AuthenticationRoute as unknown as JSX.Element)

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        category={category}
        navigatorData={
          isFeatureActive
            ? { ...navigatorData, ...{ [FEATURE_NAME]: convertAuthRoute } }
            : navigatorData
        }
      />
    )
  })
}

export default withAuth

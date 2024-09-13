import { ComponentType, forwardRef } from 'react'

import { THOCsProps } from '@practice-three/shared/types'
import { PROFILE_FEATURE } from '@practice-three/shell'

import { ProfileStack } from '../navigation'

const FEATURE_NAME = PROFILE_FEATURE.NAME

export const withProfile = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        category={category}
        navigatorData={
          isFeatureActive
            ? { ...navigatorData, ...{ [FEATURE_NAME]: ProfileStack } }
            : navigatorData
        }
      />
    )
  })
}

export default withProfile

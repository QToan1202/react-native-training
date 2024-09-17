import { ComponentType, forwardRef } from 'react'
import { isWeb } from 'tamagui'

import { THOCsProps } from '@practice-three/shared/types'
import { CHECKOUT_FEATURE } from '@practice-three/shell'

import { OrderRoute } from '../navigation'

// TODO: Change feature name
const FEATURE_NAME = CHECKOUT_FEATURE.NAME

export const withOrder = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )
    const convertOrderRoute = isWeb ? OrderRoute : (OrderRoute as unknown as JSX.Element)

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        category={category}
        navigatorData={
          isFeatureActive
            ? { ...navigatorData, ...{ [FEATURE_NAME]: convertOrderRoute } }
            : navigatorData
        }
      />
    )
  })
}

export default withOrder

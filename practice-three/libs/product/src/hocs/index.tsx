import { ComponentType, forwardRef } from 'react'
import { isWeb } from 'tamagui'

import { THOCsProps } from '@practice-three/types'
import { PRODUCT_FEATURE } from '@practice-three/shell'

import { ProductRoute } from '../navigation'

const FEATURE_NAME = PRODUCT_FEATURE

export const withProduct = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )
    const convertProductRoute = isWeb ? ProductRoute : [ProductRoute as unknown as JSX.Element]

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        category={category}
        navigatorData={isFeatureActive ? [...navigatorData, ...convertProductRoute] : navigatorData}
      />
    )
  })
}

export default withProduct

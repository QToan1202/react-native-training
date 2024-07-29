import { ComponentType, forwardRef } from 'react'

import { THOCsProps } from '@shared/types'

import { CartRoute } from '../navigation'

const FEATURE_NAME = 'cart'

export const withCart = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
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
        navigatorData={isFeatureActive ? [...navigatorData, CartRoute] : navigatorData}
      />
    )
  })
}

export default withCart

import { ComponentType, forwardRef } from 'react'
import { isWeb } from 'tamagui'

import { THOCsProps } from '@practice-three/types'

import { CheckoutRoute } from '../navigation'

const FEATURE_NAME = 'checkout'

export const withCheckout = <T extends THOCsProps>(Wrapper: ComponentType<T>) => {
  return forwardRef<unknown, T>((props, componentRef) => {
    const { category, navigatorData, ...rest } = props
    const isFeatureActive = category.find(
      (feat) => !feat.localeCompare(FEATURE_NAME, undefined, { sensitivity: 'base' })
    )
    const convertCheckoutRoute = isWeb ? CheckoutRoute : [CheckoutRoute as unknown as JSX.Element]

    return (
      <Wrapper
        ref={componentRef}
        {...(rest as T)}
        category={category}
        navigatorData={
          isFeatureActive ? [...navigatorData, ...convertCheckoutRoute] : navigatorData
        }
      />
    )
  })
}

export default withCheckout

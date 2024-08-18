import { Suspense } from 'react'
import { Spinner } from 'tamagui'
import { ListRenderItemInfo } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { IFlatListBase } from '../../types'

export const renderItem =
  <T extends IFlatListBase>(Element: React.JSX.ElementType, action?: (data: T) => void) =>
  // eslint-disable-next-line react/function-component-definition
  ({ item: { ...rest } }: ListRenderItemInfo<T>) => (
    <Element {...rest} onPress={() => action && action({ ...rest })} />
  )

export const CustomHeader = (Element: React.JSX.ElementType, props: NativeStackHeaderProps) => (
  <Suspense fallback={<Spinner size="large" color="$color.primary" />}>
    <Element {...props} />
  </Suspense>
)

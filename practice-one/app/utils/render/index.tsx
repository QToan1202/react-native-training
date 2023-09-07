import { ListRenderItemInfo } from 'react-native'

import { IFlatListBase } from '@types'

const renderItem =
  <T extends IFlatListBase>(Element: React.JSX.ElementType) =>
  // eslint-disable-next-line react/function-component-definition
  ({ item: { ...rest } }: ListRenderItemInfo<T>) => <Element {...rest} />

export default renderItem

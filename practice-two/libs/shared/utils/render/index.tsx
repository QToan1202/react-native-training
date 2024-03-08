import { ListRenderItemInfo } from 'react-native'

import { IFlatListBase } from '../../types'

const renderItem =
  <T extends IFlatListBase>(Element: React.JSX.ElementType, action?: (data: T) => void) =>
  // eslint-disable-next-line react/function-component-definition
  ({ item: { ...rest } }: ListRenderItemInfo<T>) => (
    <Element {...rest} onPress={() => action && action({ ...rest })} />
  )

export default renderItem

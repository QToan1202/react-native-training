import { memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { FlatList, FlatListProps } from 'react-native'

import { IFlatListBase } from '@types'

import styles from './styles'

export interface ListProps<T> extends FlatListProps<T> {}

const WrapList = <T extends IFlatListBase>({
  contentContainerStyle,
  columnWrapperStyle,
  numColumns = 1,
  ...rest
}: ListProps<T>) => {
  const listStyles: Pick<
    FlatListProps<T>,
    'contentContainerStyle' | 'columnWrapperStyle'
  > = useMemo(
    () =>
      numColumns > 1
        ? {
            contentContainerStyle: [styles.item, contentContainerStyle],
            columnWrapperStyle: [styles.column, columnWrapperStyle],
          }
        : {
            contentContainerStyle: [styles.item, contentContainerStyle],
          },
    [columnWrapperStyle, contentContainerStyle, numColumns]
  )

  return <FlatList {...listStyles} {...rest} numColumns={numColumns} />
}

export default memo(WrapList, isEqual)

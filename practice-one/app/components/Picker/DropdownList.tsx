import { FlatList, TouchableHighlight, TouchableHighlightProps, View } from 'react-native'

import Heading from '@components/Heading'
import { IDropDownItem } from '@types'
import { COLORS } from '@constants'

import styles from './styles'

export interface DropDownListProps<T> extends TouchableHighlightProps {
  listData: T[]
  onSelect: (item: T) => void
}

const DropdownList = <T extends IDropDownItem>({
  listData,
  style,
  onSelect,
  ...rest
}: DropDownListProps<T>) => {
  return (
    <View style={[styles.list, style]}>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={COLORS.GRAY_200}
            activeOpacity={0.5}
            onPress={() => onSelect(item)}
            {...rest}
          >
            <Heading content={item.value} style={styles.listContent} numberOfLines={1} />
          </TouchableHighlight>
        )}
      />
    </View>
  )
}

export default DropdownList

import { FlatList, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import Heading from '@components/Heading'
import { IPhoneList } from '@types'

import styles from './styles'

export interface DropDownListProps extends TouchableOpacityProps {
  listData: IPhoneList[]
  onSetSelectedItem: React.Dispatch<React.SetStateAction<IPhoneList>>
}

const DropdownList = ({ listData, style, onSetSelectedItem, ...rest }: DropDownListProps) => {
  return (
    <View style={[styles.list, style]}>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSetSelectedItem((prevState) => ({ ...prevState, item }))}
            {...rest}
          >
            <Heading content={item.value} style={styles.listContent} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default DropdownList

import { memo, useCallback, useState } from 'react'
import isEqual from 'react-fast-compare'
import {
  FlatList,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

import Paragraph from '@components/Paragraph'
import { IRadioItem } from '@types'
import { containerStyles } from '@styles'

import styles from './styles'

export interface RadioProps extends TouchableOpacityProps {
  radioList: IRadioItem[]
  style?: StyleProp<ViewStyle>
}

const Separator = () => <View style={styles.separator} />

const Radio = ({ radioList, style, ...rest }: RadioProps) => {
  const [selectedItemID, setSelectedItemID] = useState<string>()
  const handleSelectedRadio = useCallback(
    (item: IRadioItem): void => setSelectedItemID(item.id),
    []
  )

  return (
    <FlatList
      data={radioList}
      keyExtractor={({ id }: IRadioItem): string => id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.radio, style]}
          onPress={() => handleSelectedRadio(item)}
          {...rest}
        >
          <View style={[containerStyles.inline, styles.spacing]}>
            <View
              style={[styles.outline, selectedItemID === item.id ? styles.selected : styles.normal]}
            >
              {selectedItemID === item.id && <View style={styles.dot} />}
            </View>
            <Paragraph style={styles.title} content={item.name} />
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={Separator}
    />
  )
}

export default memo(Radio, isEqual)

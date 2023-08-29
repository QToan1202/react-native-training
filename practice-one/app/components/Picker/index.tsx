import { useCallback, useMemo, useRef, useState } from 'react'
import {
  Animated,
  ImageStyle,
  LayoutAnimation,
  StyleProp,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native'

import Heading from '@components/Heading'
import { containerStyles } from '@styles'
import { toggleAnim } from '@animations'
import { IDropDownItem } from '@types'

import DropdownList from './DropdownList'
import styles from './styles'

export interface PickerProps<T> extends TouchableWithoutFeedbackProps {
  listData: T[]
}

const Picker = <T extends IDropDownItem>({ listData, ...rest }: PickerProps<T>) => {
  const getFirstItemValue: string = useMemo(() => listData[0]?.value || ' ', [listData])
  const [selectedItem, setSelectedItem] = useState<string>(getFirstItemValue)
  const [isShow, setIsShow] = useState<boolean>(false)
  const animate: Animated.Value = useRef(new Animated.Value(0)).current

  const toggleDropdown = useCallback(() => {
    Animated.timing(animate, {
      duration: 300,
      toValue: isShow ? 0 : 1,
      useNativeDriver: true,
    }).start()
    LayoutAnimation.configureNext(toggleAnim)
    setIsShow((prevState) => !prevState)
  }, [animate, isShow])

  const arrowTransform = animate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  })

  const imageStyle: StyleProp<ImageStyle> = useMemo(
    () => ({
      transform: [
        {
          rotateZ: arrowTransform,
        },
      ],
    }),
    [arrowTransform]
  )

  const handleSelectItem = useCallback(
    (item: T) => {
      setSelectedItem(item.value)
      toggleDropdown()
    },
    [toggleDropdown]
  )

  return (
    <View style={[containerStyles.shrink, styles.container]}>
      <TouchableWithoutFeedback onPress={toggleDropdown} {...rest}>
        <View style={[containerStyles.inline, styles.spacing]}>
          <Heading content={selectedItem} style={styles.selected} />
          <Animated.Image source={require('@assets/arrow.png')} style={imageStyle} />
        </View>
      </TouchableWithoutFeedback>
      {isShow && <DropdownList listData={listData} onSelect={handleSelectItem} />}
    </View>
  )
}

export default Picker

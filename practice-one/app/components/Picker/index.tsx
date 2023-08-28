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
import { IPhoneList } from '@types'

import DropdownList from './DropdownList'
import styles from './styles'

export interface PickerProps<T> extends TouchableWithoutFeedbackProps {
  listData: T[]
}

const Picker = <T extends IPhoneList>({ listData, ...rest }: PickerProps<T>) => {
  const [selectedItem, setSelectedItem] = useState<IPhoneList>({
    id: 'vn',
    name: 'vietnam',
    value: '+91',
  })
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
          rotateX: arrowTransform,
        },
      ],
    }),
    [arrowTransform]
  )

  return (
    <View style={[containerStyles.shrink, styles.container]}>
      <TouchableWithoutFeedback onPress={toggleDropdown} {...rest}>
        <View style={containerStyles.inline}>
          <Heading content={selectedItem.value} style={styles.selected} />
          <Animated.Image source={require('@assets/arrow.png')} style={imageStyle} />
        </View>
      </TouchableWithoutFeedback>
      {isShow && <DropdownList listData={listData} onSetSelectedItem={setSelectedItem} />}
    </View>
  )
}

export default Picker

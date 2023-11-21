import { memo, useCallback, useMemo, useRef, useState } from 'react'
import isEqual from 'react-fast-compare'
import { Animated, ImageStyle, LayoutAnimation, StyleProp } from 'react-native'
import { XStack, XStackProps, YStack } from 'tamagui'

import Heading from '@components/Heading'
import { toggleAnim } from '@animations'
import { IDropDownItem } from '@types'

import DropdownList from './DropdownList'

export type PickerProps<T> = XStackProps & {
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

  const arrowTransform = useRef<Animated.AnimatedInterpolation<string>>(
    animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    })
  )

  const imageStyle: StyleProp<ImageStyle> = useMemo(
    () => ({
      transform: [
        {
          rotateZ: arrowTransform.current,
        },
      ],
    }),
    []
  )

  const handleSelectItem = useCallback(
    (item: T) => {
      setSelectedItem(item.value)
      toggleDropdown()
    },
    [toggleDropdown]
  )

  return (
    <YStack alignSelf="flex-start" overflow="hidden">
      <XStack alignItems="center" space="$space.2" onPress={toggleDropdown} {...rest}>
        <Heading content={selectedItem} fontSize="$3" letterSpacing="$4" width={35} />
        <Animated.Image source={require('@assets/arrow.png')} style={imageStyle} />
      </XStack>
      {isShow && <DropdownList listData={listData} onSelect={handleSelectItem} />}
    </YStack>
  )
}

export default memo(Picker, isEqual)

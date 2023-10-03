import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, TouchableWithoutFeedback, View, ViewProps } from 'react-native'

import Paragraph from '@components/Paragraph'

import styles from './styles'

export interface PlaceHolderProps extends ViewProps {
  onTouchPlaceHolder?: () => void
}

const PlaceHolder = ({ style, onTouchPlaceHolder, ...rest }: PlaceHolderProps) => {
  return (
    <TouchableWithoutFeedback onPress={onTouchPlaceHolder}>
      <View style={[styles.placeHolder, style]} {...rest}>
        <Image source={require('@assets/payment/icon.png')} />
        <Paragraph style={styles.placeHolderText} content="add payment method" />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default memo(PlaceHolder, isEqual)

import { Image, View, ViewProps } from 'react-native'

import Paragraph from '@components/Paragraph'

import styles from './styles'

export interface PlaceHolderProps extends ViewProps {}

const PlaceHolder = ({ style, ...rest }: PlaceHolderProps) => {
  return (
    <View style={[styles.placeHolder, style]} {...rest}>
      <Image source={require('@assets/payment/icon.png')} />
      <Paragraph style={styles.placeHolderText} content="add payment method" />
    </View>
  )
}

export default PlaceHolder

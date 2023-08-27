import { Image, View } from 'react-native'

import Paragraph from '@components/Paragraph'

import styles from './styles'

const PlaceHolder = () => {
  return (
    <View style={[styles.placeHolder]}>
      <Image source={require('@assets/payment/icon.png')} />
      <Paragraph style={styles.placeHolderText} content="add payment method" />
    </View>
  )
}

export default PlaceHolder

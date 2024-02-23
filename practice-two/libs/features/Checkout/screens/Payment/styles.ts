import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    opacity: 0.7,
  },
  normal: {
    backgroundColor: COLORS.GRAY_300,
  },
  active: {
    backgroundColor: COLORS.PRIMARY,
  },
  cardCarousel: {
    marginVertical: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2.5,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  img: {
    width: 160,
    height: 128,
  },
  content: {
    padding: 12,
    rowGap: 16,
  },
  title: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    maxWidth: 140,
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },
  price: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    color: COLORS.PRIMARY,
    maxWidth: 35,
  },
  discount: {
    fontSize: 10,
    color: COLORS.GRAY_50,
    textDecorationLine: 'line-through',
    maxWidth: 35,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 29,
    paddingLeft: 16,
    paddingBottom: 12,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flexDirection: 'row',
    gap: 15,
  },
  img: {
    width: 102,
    height: 102,
    borderRadius: 10,
  },
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.GRAY_50,
    textTransform: 'capitalize',
  },
  content: {
    rowGap: 12.5,
    justifyContent: 'center',
  },
  discount: {
    textDecorationLine: 'line-through',
  },
  price: {
    fontFamily: FONT_FAMILY.MONTSERRAT[700],
    fontSize: 18,
    color: COLORS.PRIMARY,
  },
})

export default styles

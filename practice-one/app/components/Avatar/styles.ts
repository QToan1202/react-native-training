import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  spacing: {
    columnGap: 10,
  },
  name: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.GRAY_50,
    textTransform: 'capitalize',
  },
  sm: {
    width: 20,
    height: 20,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  heading_bold: {
    fontFamily: FONT_FAMILY.MONTSERRAT[700],
    fontSize: 24,
    textTransform: 'capitalize',
    color: COLORS.WHITE,
  },
  heading_medium: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
  },
})

export default styles

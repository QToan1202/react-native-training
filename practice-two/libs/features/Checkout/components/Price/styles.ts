import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@practice-two/shared/constants'

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    lineHeight: 20,
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },
  title: {
    paddingVertical: 14,
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    fontSize: 18,
  },
})

export default styles

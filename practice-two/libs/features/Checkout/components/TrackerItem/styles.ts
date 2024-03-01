import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@practice-two/shared'

const styles = StyleSheet.create({
  container: {
    rowGap: 6,
  },
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.GRAY_400,
    fontSize: 10,
    lineHeight: 18,
  },
  title: {
    color: COLORS.DARK_50,
    fontSize: 14,
    textTransform: 'capitalize',
  },
})

export default styles

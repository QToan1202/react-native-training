import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@practice-two/shared'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE,
  },
  btn: {
    paddingHorizontal: 23,
    paddingVertical: 4,
  },
  btnTitle: {
    fontSize: 12,
  },
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.GRAY_50,
  },
  address: {
    opacity: 0.7,
  },
  spacing: {
    rowGap: 4,
  },
})

export default styles

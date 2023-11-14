import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  separator: {
    backgroundColor: COLORS.SEPARATOR,
    height: 1,
  },
  radio: {
    paddingVertical: 13.5,
    paddingLeft: 16,
  },
  spacing: {
    columnGap: 8,
  },
  outline: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    borderRadius: 50,
    borderWidth: 1,
  },
  dot: {
    backgroundColor: COLORS.RADIO_ACTIVE,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  normal: {
    borderColor: COLORS.RADIO_NORMAL,
  },
  selected: {
    borderColor: COLORS.RADIO_ACTIVE,
  },
  title: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    color: COLORS.GRAY_50,
    lineHeight: 21,
  },
})

export default styles

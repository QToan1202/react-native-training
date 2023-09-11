import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  label: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.GRAY_100,
  },
  labelFocus: {
    color: COLORS.PRIMARY,
  },
  input: {
    paddingVertical: 12,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 50,
    fontFamily: FONT_FAMILY.MONTSERRAT[400],
    fontSize: 18,
    color: COLORS.WHITE,
  },
  inputWithLabel: {
    paddingVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.INPUT_BORDER,
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    fontSize: 16,
    color: COLORS.BLACK,
  },
  inputFocus: {
    borderBottomColor: COLORS.PRIMARY,
  },
})

export default styles

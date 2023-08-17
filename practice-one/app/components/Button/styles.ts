import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 13,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    textTransform: 'capitalize',
  },
  btnSmall: {
    alignSelf: 'flex-start',
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY,
    color: COLORS.PRIMARY,
    borderColor: COLORS.TRANSPARENT,
  },
  tertiary: {
    backgroundColor: COLORS.TRANSPARENT,
    color: COLORS.WHITE,
    borderColor: COLORS.WHITE,
  },
  quaternary: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    borderRadius: 0,
  },
  btnContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 6,
  },
  btnTitle: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    textAlign: 'center',
  },
})

export default styles

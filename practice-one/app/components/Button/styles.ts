import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 13,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
  },
  btnSmall: {
    alignSelf: 'flex-start',
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: COLORS.PRIMARY,
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY,
    borderColor: COLORS.TRANSPARENT,
  },
  tertiary: {
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: COLORS.WHITE,
  },
  quaternary: {
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.WHITE,
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
    textTransform: 'capitalize',
  },
})

export default styles

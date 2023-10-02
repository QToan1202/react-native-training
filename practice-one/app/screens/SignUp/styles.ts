import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  titleContainer: {
    rowGap: 54,
    alignItems: 'center',
    marginBottom: 25,
  },
  btn: {
    marginVertical: 40,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    columnGap: 3,
  },
  btnTitle: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
  },
  signInBtn: {
    borderColor: COLORS.TRANSPARENT,
  },
})

export default styles

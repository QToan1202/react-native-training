import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
  },
  titleWrapper: {
    rowGap: 50,
    alignItems: 'center',
  },
  input: {
    marginVertical: 35,
    rowGap: 10,
  },
  loginBtn: {
    marginBottom: 30,
  },
  info: {
    rowGap: 45,
    alignItems: 'center',
  },
  signUpBtn: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    fontSize: 18,
    textTransform: 'none',
  },
  btn: {
    borderColor: COLORS.TRANSPARENT,
  },
})

export default styles

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
  form: {
    rowGap: 16,
  },
  btn: {
    marginVertical: 40,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 3,
  },
  signInBtn: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
  },
})

export default styles

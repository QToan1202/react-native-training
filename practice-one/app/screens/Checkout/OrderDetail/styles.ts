import { Dimensions, StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_LAYER,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  heading: {
    color: COLORS.GRAY_50,
  },
  detail: {
    marginTop: 16,
    marginBottom: 24,
    paddingLeft: 20,
    paddingRight: 17,
    backgroundColor: COLORS.WHITE,
  },
  titleContainer: {
    marginVertical: 14,
    rowGap: 10,
  },
  title: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    lineHeight: 20,
    fontSize: 16,
    color: COLORS.DARK_50,
    textTransform: 'capitalize',
  },
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    lineHeight: 18,
    color: COLORS.GRAY_400,
  },
  textDark: {
    color: COLORS.DARK_50,
  },
  line: {
    width: 70,
    height: 3,
    backgroundColor: COLORS.PRIMARY,
  },
  status: {
    marginTop: 25,
    marginBottom: 12,
    rowGap: 42,
  },
  addressInfo: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  divider: {
    marginTop: 12,
    marginLeft: -14,
    borderBottomColor: COLORS.DIVIDER,
    width: Dimensions.get('window').width,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  addressContent: {
    paddingVertical: 12,
    rowGap: 9,
  },
  addressText: {
    fontSize: 12,
  },
  btn: {
    backgroundColor: COLORS.TRANSPARENT,
    borderColor: COLORS.TRANSPARENT,
    marginTop: 16,
    marginBottom: 40,
  },
  btnTitle: {
    textTransform: 'none',
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    lineHeight: 20,
    fontSize: 14,
    color: COLORS.DARK_50,
  },
})

export default styles

import { Dimensions, StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
  },
  btnTitle: {
    color: COLORS.GRAY_50,
    opacity: 0.5,
  },
  detailWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    lineHeight: 20,
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },
  title: {
    paddingVertical: 14,
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    fontSize: 18,
  },
  line: {
    marginTop: 24,
    marginLeft: -14,
    borderBottomColor: COLORS.DIVIDER,
    width: Dimensions.get('window').width,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  spacing: {
    rowGap: 10,
  },
  itemList: {
    marginTop: 10,
    marginBottom: 60,
  },
})

export default styles

import { Dimensions, StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
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
  align: {
    alignItems: 'flex-end',
  },
  bold: {
    fontFamily: FONT_FAMILY.MONTSERRAT[700],
  },
})

export default styles

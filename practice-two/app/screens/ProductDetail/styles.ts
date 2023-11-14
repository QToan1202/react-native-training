import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_LAYER,
    rowGap: 6,
  },
  img: {
    paddingTop: 16,
    paddingHorizontal: 12,
    paddingBottom: 180,
  },
  titleWrapper: {
    paddingTop: 16,
    paddingBottom: 25,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    rowGap: 10,
  },
  title: {
    fontSize: 18,
    color: COLORS.GRAY_50,
  },
  price: {
    color: COLORS.PRIMARY,
  },
  store: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  btn: {
    paddingHorizontal: 23,
    paddingVertical: 4,
  },
  btnTitle: {
    fontSize: 12,
  },
  text: {
    color: COLORS.GRAY_50,
    lineHeight: 20,
  },
  contentWrapper: {
    paddingBottom: 13,
    paddingHorizontal: 30,
    borderRadius: 8,
    rowGap: 15,
    backgroundColor: COLORS.WHITE,
  },
  contentTitle: {
    paddingVertical: 14,
    fontSize: 18,
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    color: COLORS.BLACK,
    textTransform: 'capitalize',
  },
  category: {
    opacity: 0.7,
    minWidth: 120,
  },
  detailWrapper: {
    columnGap: 32,
    alignItems: 'flex-start',
  },
  categoryInfo: {
    maxWidth: 200,
  },
  spacing: {
    rowGap: 15,
  },
  textTransform: {
    textTransform: 'capitalize',
  },
})

export default styles

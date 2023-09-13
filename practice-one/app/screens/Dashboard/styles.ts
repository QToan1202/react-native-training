import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  sliderItem: {
    marginLeft: 14,
    marginVertical: 13,
    columnGap: 14,
  },
  menuItem: {
    margin: 0.5,
    gap: 0.5,
  },
  productItem: {
    marginLeft: 10,
  },
  heading: {
    color: COLORS.GRAY_50,
    fontSize: 18,
  },
  headingWhite: {
    color: COLORS.WHITE,
  },
  productContainer: {
    marginVertical: 12,
  },
  productHeading: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  itemSpacing: {
    paddingLeft: 20,
    columnGap: 10,
  },
  bgStore: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: COLORS.PRIMARY,
    width: Dimensions.get('window').width,
    height: '70%',
  },
  btn: {
    paddingHorizontal: 23,
    paddingVertical: 4,
  },
  btnTitle: {
    fontSize: 12,
  },
})

export default styles

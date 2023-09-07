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
    marginLeft: 20,
  },
  productHeading: {
    marginVertical: 16,
    paddingRight: 20,
  },
  itemSpacing: {
    columnGap: 10,
  },
  storeContainer: {
    paddingLeft: 20,
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
    fontSize: 10,
  },
})

export default styles

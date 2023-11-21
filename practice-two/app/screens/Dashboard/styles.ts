import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
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
})

export default styles

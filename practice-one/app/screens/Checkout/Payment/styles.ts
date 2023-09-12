import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
    rowGap: 16,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
  },
  radio: {
    backgroundColor: COLORS.WHITE,
  },
  dotGroup: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    opacity: 0.7,
  },
  normal: {
    backgroundColor: COLORS.GRAY_300,
  },
  active: {
    backgroundColor: COLORS.PRIMARY,
  },
  cardCarousel: {
    marginVertical: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2.5,
  },
  cardItem: {
    alignSelf: 'center',
  },
})

export default styles

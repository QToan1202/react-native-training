import { Dimensions, StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
  },
  form: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 24,
    paddingHorizontal: 34,
  },
  cardContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    backgroundColor: COLORS.BG_LAYER,
    paddingHorizontal: 34,
  },
  cardSize: {
    width: 310,
    height: 183,
    alignSelf: 'center',
    position: 'absolute',
    top: -15,
    zIndex: 3,
  },
  cardContent: {
    maxHeight: undefined,
    maxWidth: undefined,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingRight: 0,
  },
  expiresDate: {
    flex: 3,
  },
  cvc: {
    flex: 2,
  },
  spacing: {
    columnGap: 30,
  },
  error: {
    paddingLeft: 0,
  },
})

export default styles

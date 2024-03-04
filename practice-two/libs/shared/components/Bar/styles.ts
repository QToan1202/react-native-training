import { StyleSheet } from 'react-native'

import { COLORS } from '../../constants'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.PRIMARY,
    rowGap: 24,
  },
  title: {
    textTransform: 'capitalize',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  itemsContainer: {
    justifyContent: 'space-between',
  },
})

export default styles

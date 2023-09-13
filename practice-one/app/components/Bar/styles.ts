import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.PRIMARY,
    rowGap: 24,
  },
  itemsContainer: {
    justifyContent: 'space-between',
  },
})

export default styles

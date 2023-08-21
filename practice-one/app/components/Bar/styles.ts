import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.PRIMARY,
  },
  headingContainer: {
    marginBottom: 14,
  },
  itemsContainer: {
    marginVertical: 14,
    justifyContent: 'space-between',
  },
})

export default styles

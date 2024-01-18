import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  item: {
    paddingVertical: 30,
    rowGap: 10,
    alignSelf: 'center',
  },
  column: {
    columnGap: 10,
    justifyContent: 'flex-start',
  },
})

export default styles

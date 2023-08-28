import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  selected: {
    fontSize: 18,
  },
  list: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'black',
    fontSize: 16,
  },
})

export default styles

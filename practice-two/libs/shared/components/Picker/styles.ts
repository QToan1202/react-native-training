import { StyleSheet } from 'react-native'

import { COLORS } from '@practice-two/shared'

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  spacing: {
    columnGap: 7,
  },
  selected: {
    width: 35,
    fontSize: 18,
    letterSpacing: -0.4,
  },
  list: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  listContent: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    color: 'black',
    fontSize: 16,
  },
})

export default styles

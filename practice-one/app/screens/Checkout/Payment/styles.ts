import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
    paddingTop: 16,
    rowGap: 16,
  },
  card: {
    minHeight: 250,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    backgroundColor: COLORS.WHITE,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    backgroundColor: COLORS.WHITE,
  },
  elevation: {
    elevation: 24,
  },
  shadow: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS } from '@practice-two/shared'

const styles = StyleSheet.create({
  errorWrapper: {
    height: 20,
  },
  error: {
    paddingLeft: 20,
    color: COLORS.RED,
    fontSize: 13,
    lineHeight: 20,
  },
})

export default styles

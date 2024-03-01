import { StyleSheet } from 'react-native'

import { COLORS } from '@practice-two/shared'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
  },
  btnTitle: {
    color: COLORS.GRAY_50,
    opacity: 0.5,
  },
  itemList: {
    marginTop: 10,
    marginBottom: 60,
  },
})

export default styles

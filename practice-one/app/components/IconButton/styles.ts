import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    padding: 7,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  transparent: {
    backgroundColor: COLORS.TRANSPARENT,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_LAYER,
  },
  btnTitle: {
    color: COLORS.BLUE,
    textTransform: 'none',
  },
  form: {
    marginTop: 36,
    marginHorizontal: 27,
    rowGap: 6,
  },
  error: {
    paddingLeft: 0,
  },
})

export default styles

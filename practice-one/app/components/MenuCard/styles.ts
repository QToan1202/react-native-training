import { StyleSheet } from 'react-native'

import { FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    fontSize: 11,
    textTransform: 'capitalize',
  },
})

export default styles
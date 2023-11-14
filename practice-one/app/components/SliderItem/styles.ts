import { StyleSheet } from 'react-native'

import { FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 32,
    minWidth: 300,
    alignSelf: 'flex-start',
    rowGap: 20,
    borderRadius: 8,
  },
  content: {
    marginLeft: 17,
    maxWidth: 200,
    fontFamily: FONT_FAMILY.MONTSERRAT[600],
    textTransform: 'uppercase',
  },
  btn: {
    marginLeft: 12,
    paddingVertical: 4,
    paddingHorizontal: 13,
  },
  btnTitle: {
    fontFamily: FONT_FAMILY.MONTSERRAT[700],
    fontSize: 12,
    textTransform: 'uppercase',
  },
})

export default styles

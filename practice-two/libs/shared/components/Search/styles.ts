import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '../../constants'

const styles = StyleSheet.create({
  search: {
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    fontSize: 14,
    color: COLORS.GRAY_50,
    paddingVertical: 8,
    paddingLeft: 0,
  },
})

export default styles

import { StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    borderRadius: 50,
    paddingLeft: 17,
    backgroundColor: COLORS.WHITE,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  search: {
    flex: 1,
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    fontSize: 14,
    color: COLORS.GRAY_50,
    paddingVertical: 8,
  },
})

export default styles

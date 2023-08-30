import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 22,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  block: {
    flexDirection: 'column',
    alignItems: 'center',
    columnGap: 4,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_CARD,
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  shrink: {
    alignSelf: 'flex-start',
  },
  expand: {
    flex: 1,
  },
})

export default styles

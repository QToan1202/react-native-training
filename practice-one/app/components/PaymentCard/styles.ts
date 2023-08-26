import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    paddingVertical: 13,
    paddingHorizontal: 17,
    columnGap: 15,
    borderRadius: 9,
    overflow: 'hidden',
  },
  rowSpacing: {
    rowGap: 5,
  },
  title: {
    color: COLORS.GRAY_200,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  titleUppercase: {
    textTransform: 'uppercase',
  },
  cvc: {
    textAlign: 'right',
  },
})

export default styles

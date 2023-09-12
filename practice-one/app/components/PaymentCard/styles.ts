import { StyleSheet } from 'react-native'

import { COLORS } from '@constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    paddingVertical: 13,
    paddingHorizontal: 17,
    columnGap: 17,
    borderRadius: 9,
    overflow: 'hidden',
    maxHeight: 146,
    maxWidth: 246,
  },
  rowSpacing: {
    height: '100%',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.GRAY_200,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  cardNumber: {
    width: 167,
  },
  titleUppercase: {
    textTransform: 'uppercase',
  },
  cvc: {
    textAlign: 'right',
  },
  checkIcon: {
    position: 'absolute',
    zIndex: 3,
    right: -1,
    bottom: -10,
  },
  placeHolder: {
    paddingVertical: 36,
    paddingHorizontal: 38.5,
    alignSelf: 'flex-start',
    alignItems: 'center',
    rowGap: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.GRAY_300,
    borderStyle: 'dashed',
  },
  placeHolderText: {
    color: COLORS.GRAY_300,
    textTransform: 'capitalize',
    lineHeight: 28,
    letterSpacing: 0.5,
  },
})

export default styles

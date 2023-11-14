import { Dimensions, StyleSheet } from 'react-native'

import { COLORS, FONT_FAMILY } from '@constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 20,
  },
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: COLORS.PRIMARY,
    width: Dimensions.get('window').width,
    height: '40%',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 42,
  },
  imgContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    maxWidth: 300,
    fontFamily: FONT_FAMILY.MONTSERRAT[500],
    color: COLORS.PRIMARY,
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: -0.5,
  },
  dotGroup: {
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  dot: {
    alignSelf: 'flex-start',
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  normal: {
    backgroundColor: COLORS.PRIMARY,
    opacity: 0.6,
  },
  active: {
    backgroundColor: COLORS.PRIMARY,
  },
  btn: {
    marginHorizontal: 34,
  },
})

export default styles

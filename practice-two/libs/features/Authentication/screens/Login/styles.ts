import { StyleSheet } from 'react-native'

import { COLORS } from '@practice-two/shared/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 35,
    rowGap: 20,
  },
})

export default styles

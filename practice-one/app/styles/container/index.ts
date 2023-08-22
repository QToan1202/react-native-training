import { StyleSheet } from 'react-native'

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
})

export default styles

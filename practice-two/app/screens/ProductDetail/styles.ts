import { ImageBackground } from 'react-native'
import { styled } from 'tamagui'

const StyledImageBackground = styled(ImageBackground, {
  source: { uri: '' },
  paddingTop: 16,
  paddingHorizontal: 12,
  height: 230,

  style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default StyledImageBackground

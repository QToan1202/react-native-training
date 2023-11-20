import { GetProps, styled } from 'tamagui'
import { ImageBackground } from 'react-native'

const StyledImageBackground = styled(ImageBackground, {
  name: 'ImageBackground',
  source: { uri: '' },
})

export type StyledImageBackgroundProps = GetProps<typeof StyledImageBackground>

export default StyledImageBackground

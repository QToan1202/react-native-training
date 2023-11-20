import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { ImageBackgroundProps, StyleProp, ViewStyle } from 'react-native'
import { Stack } from 'tamagui'

import Paragraph from '@components/Paragraph'
import { imageStyles } from '@styles'

import StyledImageBackground, { StyledImageBackgroundProps } from './styles'

export type MenuCardProps = StyledImageBackgroundProps & {
  source: ImageBackgroundProps['source']
  name: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const MenuCard = ({ source, name, onPress, ...rest }: MenuCardProps) => {
  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignItems="stretch"
      pressStyle={{ opacity: 0.8 }}
      onPress={onPress}
    >
      <StyledImageBackground
        source={source}
        justifyContent="center"
        alignItems="center"
        style={imageStyles.menu}
        {...rest}
      >
        <Paragraph content={name} fontWeight="$3" fontSize={11} textTransform="capitalize" />
      </StyledImageBackground>
    </Stack>
  )
}

export default memo(MenuCard, isEqual)

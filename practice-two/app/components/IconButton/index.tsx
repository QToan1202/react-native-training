import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageSourcePropType } from 'react-native'

import { imageStyles } from '@styles'

import StyledIconButton, { CustomButtonProps } from './styles'

export type IconButtonProps = {
  icon: ImageSourcePropType
} & CustomButtonProps

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <StyledIconButton {...rest}>
      <Image source={icon} resizeMode="cover" style={imageStyles.icon} />
    </StyledIconButton>
  )
}

export default memo(IconButton, isEqual)

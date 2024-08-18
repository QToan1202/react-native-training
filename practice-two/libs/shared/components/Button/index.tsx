import { memo, useMemo } from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import isEqual from 'react-fast-compare'

import { imageStyles } from '../../styles'

import ButtonStyled, { ButtonProps as StyledButtonProps } from './styles'

export type ButtonProps = {
  title: string
  leftIcon?: ImageSourcePropType
  rightIcon?: ImageSourcePropType
} & StyledButtonProps

const Button = ({ title, leftIcon, rightIcon, isDisable, onPress, ...rest }: ButtonProps) => {
  const onPressWithDisableState = useMemo(
    () => (isDisable ? undefined : onPress),
    [isDisable, onPress]
  )

  return (
    <ButtonStyled {...rest} isDisable={isDisable} onPress={onPressWithDisableState}>
      {leftIcon && (
        <ButtonStyled.Icon>
          <Image source={leftIcon} style={imageStyles.icon} />
        </ButtonStyled.Icon>
      )}
      <ButtonStyled.Text>{title}</ButtonStyled.Text>
      {rightIcon && (
        <ButtonStyled.Icon>
          <Image source={rightIcon} style={imageStyles.icon} />
        </ButtonStyled.Icon>
      )}
    </ButtonStyled>
  )
}

export default memo(Button, isEqual)

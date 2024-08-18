import { ReactNode, useCallback, useMemo } from 'react'

import StyledButton, { ButtonProps as StyledButtonProps } from './Button'
import { Spinner, Stack } from 'tamagui'

type TIconState =
  | {
      startIcon?: ReactNode
      endIcon?: never
    }
  | {
      startIcon?: never
      endIcon?: ReactNode
    }

export type ButtonProps = StyledButtonProps &
  TIconState & {
    title: string
    loading?: boolean
  }

const Loading = (
  <Stack pos="absolute">
    <Spinner size="small" color="$gray_200" />
  </Stack>
)

const Button = ({
  title,
  startIcon,
  endIcon,
  loading = false,
  isDisable = false,
  onPress,
  ...rest
}: ButtonProps) => {
  const onPressWithDisableState = useMemo(
    () => (isDisable || loading ? undefined : onPress),
    [isDisable, loading, onPress]
  )
  // const shouldRenderLoading = useCallback(
  //   (Component: ReactNode) =>
  //     loading ? Loading : <StyledButton.Icon>{Component}</StyledButton.Icon>,
  //   [loading]
  // )

  return (
    <StyledButton isDisable={isDisable || loading} onPress={onPressWithDisableState} {...rest}>
      {startIcon ? <StyledButton.Icon>{startIcon}</StyledButton.Icon> : null}
      {loading ? Loading : null}
      <StyledButton.Text style={loading ? { color: 'transparent' } : {}}>{title}</StyledButton.Text>
      {endIcon ? <StyledButton.Icon>{endIcon}</StyledButton.Icon> : null}
    </StyledButton>
  )
}

export default Button

import { useId } from 'react'
import { RadioGroup, XStack, RadioGroupItemProps, Label, styled } from 'tamagui'
import useRadio from './useRadio'

export type RadioItemProps = RadioGroupItemProps & {
  label?: string
}

const StyledItem = styled(RadioGroup.Item, {
  size: '$6',
  backgroundColor: '$white',
  borderWidth: 1,
  borderColor: '$transparent',

  hoverStyle: {
    backgroundColor: '$gray_50',
  },
  focusStyle: {
    borderColor: '$gray_50',
    backgroundColor: '$white',
  },
})

const RadioItem = StyledItem.styleable<RadioItemProps>(
  ({ label, children, ...restProps }: RadioItemProps, ref) => {
    const radioId = useId()
    const selectValue = useRadio((state) => state.value)

    return (
      <XStack>
        <StyledItem
          id={radioId}
          forceStyle={selectValue === restProps.value ? 'focus' : undefined}
          ref={ref}
          {...restProps}
        >
          {children ? children : <RadioGroup.Indicator scale={2} backgroundColor="$primary" />}
        </StyledItem>

        {label && <Label htmlFor={radioId}>{label}</Label>}
      </XStack>
    )
  }
)

export default RadioItem

import { GetProps, Input, SizableText, styled } from 'tamagui'

export const Label = styled(SizableText, {
  fontSize: '$true',
  color: '$color.gray_100',
  fontWeight: '$2',
  lineHeight: '$2',
  pressStyle: {},
  focusStyle: {
    color: '$color.primary',
  },
})

export type LabelProps = GetProps<typeof Label>

export const StyledInput = styled(Input, {
  unstyled: true, // Reset Tamagui Input component style
  fontFamily: '$body',
  backgroundColor: '$color.transparent',
  focusable: true,
  pressStyle: {},

  variants: {
    hasLabel: {
      true: {
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '$color.input_border',
        fontWeight: '$2',
        fontSize: '$2',
        color: '$color.black',

        focusStyle: {
          borderBottomColor: '$color.primary',
        },
      },
      false: {
        paddingVertical: 12,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '$color.white',
        borderRadius: '$radius.12',
        fontWeight: '$1',
        fontSize: '$3',
        color: '$color.white',
      },
    },
  } as const,

  defaultVariants: {
    hasLabel: false,
  },
})

export type StyledInputProps = GetProps<typeof StyledInput>

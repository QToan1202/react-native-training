import { StyleSheet } from 'react-native'
import { GetProps, Input, SizableText, styled } from 'tamagui'

export const Label = styled(SizableText, {
  fontSize: 14,
  color: '$color.gray_100',
  fontWeight: '$2',
  lineHeight: '$2',

  focusStyle: {
    fontWeight: '$2',
    color: '$color.primary',
  },
})

export type LabelProps = GetProps<typeof Label>

export const StyledInput = styled(Input, {
  unstyled: true, // Reset Tamagui Input component style
  backgroundColor: '$color.transparent',

  variants: {
    hasLabel: {
      true: {
        paddingVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
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

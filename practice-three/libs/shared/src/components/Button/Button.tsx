import {
  ButtonIcon,
  GetProps,
  TextContextStyles,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

import { Text } from '../Text'

type ButtonVariant = 'primary' | 'outlined' | 'text'

const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      variant?: ButtonVariant
    }
  >
>({
  color: undefined,
  ellipse: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  textAlign: undefined,
  variant: undefined,
})

const ButtonFrame = styled(View, {
  name: 'Button',
  tag: 'button',
  context: ButtonContext,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  paddingVertical: 15,
  paddingHorizontal: 35,
  borderRadius: '$6',
  borderWidth: 2,
  gap: 6,

  variants: {
    variant: {
      primary: {
        borderColor: '$primary',
        backgroundColor: '$primary',
        color: '$white',
      },

      outlined: {
        borderColor: '$primary',
        backgroundColor: '$transparent',
        color: '$primary',
      },

      text: {
        borderColor: '$transparent',
        backgroundColor: '$transparent',
        color: '$primary',
      },
    },

    isDisable: {
      true: {
        opacity: 0.5,
        cursor: 'default',
      },
      false: {
        cursor: 'pointer',
        hoverStyle: {
          opacity: 0.8,
        },
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    isDisable: false,
  },
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  userSelect: 'none',
  textTransform: 'capitalize',
  textAlign: 'center',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

const ButtonStyled = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
})

export type ButtonProps = GetProps<typeof ButtonText> & GetProps<typeof ButtonFrame>

export default ButtonStyled

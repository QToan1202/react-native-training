import {
  ButtonIcon,
  GetProps,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

import { Text } from '../Text'

const ButtonContext = createStyledContext({
  color: undefined,
  ellipse: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  lineHeight: undefined,
})

const CustomButtonFrame = styled(View, {
  name: 'Button',
  tag: 'button',
  context: ButtonContext,
  paddingVertical: 15,
  paddingHorizontal: 35,
  borderRadius: '$6',
  borderWidth: '$1',
  borderColor: '$transparent',

  variants: {
    variant: {
      primary: {
        borderColor: '$primary',
        backgroundColor: '$primary',
        color: '$white',
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
  name: 'Button',
  context: ButtonContext,
  userSelect: 'none',

  variants: {
    default: {
      true: {
        textTransform: 'capitalize',
        textAlign: 'center',
      },
    },
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,

  defaultVariants: {
    default: true,
  },
})

const ButtonStyled = withStaticProperties(CustomButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
})

export type ButtonProps = GetProps<typeof ButtonText> & GetProps<typeof CustomButtonFrame>

export default ButtonStyled

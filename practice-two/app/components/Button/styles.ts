import {
  ButtonIcon,
  GetProps,
  SizableText,
  Stack,
  createStyledContext,
  styled,
  withStaticProperties,
} from 'tamagui'

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

const CustomButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  paddingVertical: '$space.3',
  borderRadius: '$radius.12',
  borderWidth: '$space.1',
  borderColor: '$color.transparent',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 6, // getTokens().space[2].val - 1
  pressStyle: {
    opacity: 0.5,
  },

  variants: {
    variant: {
      primary: {
        borderColor: '$color.primary',
        backgroundColor: '$color.primary',
        color: '$color.white',
      },

      secondary: {
        borderColor: '$color.transparent',
        backgroundColor: '$color.secondary',
        color: '$color.primary',
      },

      tertiary: {
        borderColor: '$color.white',
        backgroundColor: '$color.transparent',
        color: '$color.white',
      },

      quaternary: {
        borderRadius: '$radius.0',
        borderColor: '$color.white',
        backgroundColor: '$color.white',
        color: '$color.black',
      },
    },

    shrink: {
      true: {
        alignSelf: 'flex-start',
        paddingVertical: '$space.2',
        paddingHorizontal: 6,
      },
    },

    isDisable: {
      true: {
        opacity: 0.5,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
})

const ButtonText = styled(SizableText, {
  name: 'Button',
  context: ButtonContext,
  userSelect: 'none',

  variants: {
    default: {
      true: {
        fontWeight: '$2',
        textTransform: 'capitalize',
        textAlign: 'center',
        lineHeight: '$2',
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

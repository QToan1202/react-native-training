import {
  ButtonIcon,
  GetProps,
  SizableText,
  Stack,
  createStyledContext,
  getTokens,
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
})

const CustomButtonFrame = styled(Stack, {
  name: 'Button',
  context: ButtonContext,
  paddingVertical: '$space.3',
  borderRadius: '$radius.12',
  borderWidth: '$space.1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: getTokens().space[2].val - 1,
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
        paddingHorizontal: getTokens().space[4].val + 2,
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
  size: '$2',
  fontWeight: '$2',
  textTransform: 'capitalize',
  textAlign: 'center',
})

const ButtonStyled = withStaticProperties(CustomButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
})

export type ButtonProps = GetProps<typeof CustomButtonFrame>

export default ButtonStyled

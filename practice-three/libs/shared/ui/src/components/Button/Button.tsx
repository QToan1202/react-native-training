import { useContext } from 'react'
import {
  ButtonIcon,
  GetProps,
  SizableText,
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
  borderRadius: 5,
  borderWidth: 2,
  gap: 6,
  pressStyle: {
    opacity: 0.5,
  },

  variants: {
    variant: {
      primary: {
        borderColor: '$primary',
        backgroundColor: '$primary',
      },

      outlined: {
        borderColor: '$primary',
        backgroundColor: '$transparent',
      },

      text: {
        borderColor: '$transparent',
        backgroundColor: '$transparent',
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

const BaseButtonText = styled(SizableText, {
  name: 'ButtonText',
  tag: 'span',
  userSelect: 'none',
  textTransform: 'capitalize',
  textAlign: 'center',

  variants: {
    variant: {
      primary: {
        color: '$white',
      },

      outlined: {
        color: '$primary',
      },

      text: {
        color: '$primary',
      },
    },
  } as const,
})

/**
 * Since original Text component have it own Provider
 * then the context that drive from Button cannot override the Text Provider
 * so we need to manually adjust priority of styling
 * then the styles can merge correctly
 */
const ButtonText = ({ children, ...originProps }: GetProps<typeof BaseButtonText>) => {
  // Spread first to get variant to make sure
  // variant don't override any of custom text styles
  const { variant, ...contextProps } = useContext(ButtonContext)

  return (
    <BaseButtonText variant={variant} {...contextProps} {...originProps}>
      {children}
    </BaseButtonText>
  )
}

const ButtonStyled = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
})

export type ButtonProps = GetProps<typeof BaseButtonText> & GetProps<typeof ButtonFrame>

export default ButtonStyled

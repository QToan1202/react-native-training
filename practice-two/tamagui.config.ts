import { createAnimations } from '@tamagui/animations-moti'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui, createTokens } from 'tamagui'

const animations = createAnimations({
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
})

const customTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    primary: '#33907C',
    secondary: '#fff',
    gray_50: '#4f4f4f',
    gray_100: '#3a2c3c',
    gray_200: '#b7b7b7',
    gray_300: '#00000033',
    gray_400: '#606a7b',
    border_card: '#0000001a',
    radio_normal: '#ced2d9',
    radio_active: '#13b58c',
    separator: '#d8d8d8',
    dark_50: '#212121',
    red: '#ff5880',
    bg_layer: '#f6f9ff',
    divider: '#0000001a',
    input_border: '#dbdbde',
    blue: '#4ea0ff',
  },
  avatar: {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 64,
  },
  icon: {
    width: 24,
    height: 24,
  },
})

const montserratFont = createFont({
  size: {
    1: 14,
    true: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 24,
  },
  lineHeight: {
    1: 12,
    2: 16,
    true: 16,
    3: 18,
    4: 24,
    5: 26,
  },
  weight: {
    1: '400',
    true: '400',
    2: '500',
    3: '600',
    4: '700',
  },
  letterSpacing: {
    1: 0,
    true: 0,
    2: -0.6,
    3: -0.5,
    4: -0.4,
    5: 0.2,
    6: 1.2,
  },
  face: {
    400: { normal: 'Montserrat_400Regular' },
    500: { normal: 'Montserrat_500Medium' },
    600: { normal: 'Montserrat_600SemiBold' },
    700: { normal: 'Montserrat_700Bold' },
  },
})

const config = createTamagui({
  animations,
  defaultTheme: 'light',
  fonts: {
    heading: montserratFont,
    body: montserratFont,
  },
  tokens: customTokens,
  themes,
  shorthands,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config

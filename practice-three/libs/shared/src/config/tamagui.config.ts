import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createMedia, createTamagui, createTokens } from 'tamagui'

const customTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    pure_white: '#fff',
    white: '#f5f5f5',
    black: '#272727',
    pure_black: '#000',
    transparent: '00ffffff',
    primary: '#002482',
    indigo: '#223263',
    blue: '#0081de',
    green_50: '#0eb000',
    green_100: '#0a8200',
    gray_50: '#f0f0f0',
    gray_100: '#848484',
    gray_200: '#646464',
    gray_300: '#565656',
    yellow: '#f2c94c',
    red_50: '#fb7181',
    red_100: '#e90000',
    red_200: '#ff0000',
  },
  zIndex: {
    ...tokens.zIndex,
    selectContent: 10000,
  },
})

const fonts = createFont({
  family: 'Libre Baskerville, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    true: 14,
    3: 18,
    4: 20,
    5: 24,
    6: 36,
  },
  face: {
    400: { normal: 'SF-Pro-Display-Regular', italic: 'SF-Pro-Display-RegularItalic' },
    500: { normal: 'SF-Pro-Display-Medium', italic: 'SF-Pro-Display-MediumItalic' },
    600: { normal: 'SF-Pro-Display-Semibold', italic: 'SF-Pro-Display-SemiboldItalic' },
    700: { normal: 'SF-Pro-Display-Bold', italic: 'SF-Pro-Display-BoldItalic' },
  },
})

const mediaQueries = createMedia({
  xs: { minWidth: 414 + 1 },
  sm: { minWidth: 768 + 1 },
  md: { minWidth: 992 + 1 },
  lg: { minWidth: 1200 + 1 },
  xl: { minWidth: 1400 + 1 },
})

const config = createTamagui({
  defaultTheme: 'light',
  fonts: {
    heading: fonts,
    body: fonts,
  },
  tokens: customTokens,
  themes,
  shorthands,
  media: mediaQueries,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config

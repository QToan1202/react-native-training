import { createFont, createMedia, createTamagui, createTokens } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

import { animations } from './animations'

const customTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    pure_white: '#fff',
    white: '#f5f5f5',
    black: '#272727',
    pure_black: '#000',
    transparent: 'transparent',
    primary: '#002482',
    blue_50: '#0081de',
    blue_100: '#223263',
    blue_200: '#00398f',
    blue_300: '#40bfff',
    green_50: '#0eb000',
    green_100: '#0a8200',
    gray_50: '#f0f0f0',
    gray_100: '#848484',
    gray_200: '#646464',
    gray_300: '#565656',
    gray_400: '#7c7c7c',
    yellow: '#f2c94c',
    red_50: '#fb7181',
    red_100: '#e90000',
    red_200: '#ff0000',
    red_300: '#db0b0b',
    border: '#e1e2e7',
    separate: '#eaeaea',
    pale: '#ebf0ff',
    dust: 'rgba(144, 152, 177, 0.4)',
    skeleton: 'rgba(0, 0, 0, 0.13)',
    skeletonIndicator: 'rgba(0, 0, 0, 0.2)',
    footer: '#00071b',
  },
  zIndex: {
    ...tokens.zIndex,
    selectContent: 10000,
    step: 3,
    stepConnector: 1,
  },
  card: {
    width: 410,
    height: 420,
  },
  cardMobile: {
    width: 185,
    height: 320,
  },
  commentImage: {
    width: 140,
    height: 140,
  },
  category: {
    width: 62,
    height: 62,
  },
  deal: {
    width: 490,
    height: 570,
  },
  wishlistImg: {
    width: 87,
    height: 77,
  },
  bottomTabBar: {
    height: 65,
  },
  cartItem: {
    width: 72,
    height: 72,
  },
  blogCard: {
    width: 750,
    height: 360,
  },
  review: {
    width: 950,
    height: 480,
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
  animations,
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

import { createFont } from 'tamagui'

export const fontTokens = {
  1: 12,
  2: 14,
  true: 14,
  3: 18,
  4: 20,
  5: 24,
  6: 36,
}

const fonts = createFont({
  family: 'Libre Baskerville, Arial, sans-serif',
  size: fontTokens,
  face: {
    400: { normal: 'SF-Pro-Display-Regular', italic: 'SF-Pro-Display-RegularItalic' },
    500: { normal: 'SF-Pro-Display-Medium', italic: 'SF-Pro-Display-MediumItalic' },
    600: { normal: 'SF-Pro-Display-Semibold', italic: 'SF-Pro-Display-SemiboldItalic' },
    700: { normal: 'SF-Pro-Display-Bold', italic: 'SF-Pro-Display-BoldItalic' },
  },
})

export default fonts

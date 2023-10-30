import { config as nativeConfig } from "@tamagui/config/v2-native";
import { createMedia } from '@tamagui/react-native-media-driver'
import { createFont, createTamagui } from "tamagui";

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 24,
  },
  lineHeight: {
    1: 16,
    2: 18,
    5: 30,
  },
  weight: {
    1: '300',
    2: '400',
    3: '500',
    4: '600',
    5: '700',
  },
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  }
})

const tamaguiConfig = createTamagui({
  ...nativeConfig,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes: {
    dark: {
      bg: '#111',
      color: '#fff'
    },
    light: {
      bg: '#f2f2f2',
      color: '#000',
    },
  },
  media: createMedia({
    gtXs: { minWidth: 320 + 1 },
    gtSm: { minWidth: 660 + 1 },
    gtMd: { minWidth: 860 + 1 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  shorthands: {
    w: 'width',
    h: 'height',
    pt: 'paddingTop',
  } as const,
});

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;

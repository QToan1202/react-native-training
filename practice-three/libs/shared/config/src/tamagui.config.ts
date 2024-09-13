import { createTamagui, createTokens } from 'tamagui'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

import { animations } from './animations'
import fonts, { fontTokens } from './fonts'
import mediaQueries from './mediaQueries'
import colors from './colors'
import zIndex from './zIndex'
import customTokens from './customTokens'

const tamaguiTokens = createTokens({
  ...tokens,
  color: colors,
  fonts: fontTokens,
  zIndex,
  ...customTokens,
})

const config = createTamagui({
  defaultTheme: 'light',
  animations,
  fonts: {
    heading: fonts,
    body: fonts,
  },
  tokens: tamaguiTokens,
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

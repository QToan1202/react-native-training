import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'

export const decorators = [
  withBackgrounds,
  (StoryFn) => (
    <TamaguiProvider config={config}>
      <StoryFn />
    </TamaguiProvider>
  ),
]

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#3e3a3a' },
    ],
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

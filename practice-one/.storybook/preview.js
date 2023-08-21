import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { View } from 'react-native'

export const decorators = [withBackgrounds]

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

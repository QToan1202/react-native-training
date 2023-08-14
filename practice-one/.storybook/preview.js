import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { View } from 'react-native'

export const decorators = [withBackgrounds]

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#000' },
    ],
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'

import { tamaguiConfig } from '../src/config'

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <Story />
      </TamaguiProvider>
    ),
  ],
}

export default preview

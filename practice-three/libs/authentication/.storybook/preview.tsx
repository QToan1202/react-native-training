import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'

import tamaguiConfig from '../src/tamagui.config'

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

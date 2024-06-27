import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'

import tamaguiConfig from '../src/tamagui.config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </TamaguiProvider>
    ),
  ],
}

export default preview

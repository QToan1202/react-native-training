import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import tamaguiConfig from '../src/tamagui.config'

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
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [{ path: '/search', useStoryElement: true }],
    }),
  },
}

export default preview

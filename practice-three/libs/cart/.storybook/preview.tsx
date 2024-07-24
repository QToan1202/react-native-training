import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router'

import tamaguiConfig from '../src/tamagui.config'

export const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
    withRouter,
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <Story />
            <ToastViewport unstyled />
          </ToastProvider>
        </QueryClientProvider>
      </TamaguiProvider>
    ),
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [{ path: '/cart', useStoryElement: true }],
    }),
  },
}

export default preview

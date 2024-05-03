import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router'

import { Toast } from '@shared/components'
import tamaguiConfig from '../src/tamagui.config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
    withRouter,
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <ToastViewport flexDirection="column" bottom={50} left={0} right={0} />
            <Toast />
            <Story />
          </ToastProvider>
        </QueryClientProvider>
      </TamaguiProvider>
    ),
  ],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [
        { path: '/register', useStoryElement: true },
        { path: '/login', useStoryElement: true },
        { path: '/verification', useStoryElement: true },
        { path: '/forgot-password', useStoryElement: true },
        { path: '/reset-password', useStoryElement: true },
      ],
    }),
  },
}

export default preview

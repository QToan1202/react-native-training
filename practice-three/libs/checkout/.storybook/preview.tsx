import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastProvider, ToastViewport } from '@tamagui/toast'

import tamaguiConfig from '../src/tamagui.config'

export const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
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
}

export default preview

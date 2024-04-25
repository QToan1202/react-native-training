import React from 'react'
import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'

import { Toast } from '@shared/components'
import tamaguiConfig from '../src/tamagui.config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const preview: Preview = {
  decorators: [
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
}

export default preview

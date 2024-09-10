import '@tamagui/core/reset.css'

import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toast } from '@practice-three/shared/ui'

import App from './app/app'
import { tamaguiConfig } from './config'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig}>
        <ToastProvider>
          <ToastViewport flexDirection="column" bottom={50} left={0} right={0} />
          <Toast />
          <App />
        </ToastProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  </StrictMode>
)

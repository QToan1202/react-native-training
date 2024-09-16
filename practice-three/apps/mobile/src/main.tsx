import { AppRegistry } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PortalProvider, TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@practice-three/shared/ui'

import App from './app/App'
import { tamaguiConfig } from './config'

const queryClient = new QueryClient()

const MobileApp = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <TamaguiProvider config={tamaguiConfig}>
        <PortalProvider>
          <ToastProvider>
            <ToastViewport flexDirection="column" bottom={50} left={0} right={0} />
            <Toast />
            <App />
          </ToastProvider>
        </PortalProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
)

AppRegistry.registerComponent('Mobile', () => MobileApp)

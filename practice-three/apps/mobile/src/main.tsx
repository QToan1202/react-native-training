import { AppRegistry } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import { NavigationContainer } from '@react-navigation/native'

import { Toast } from '@practice-three/components'

import App from './app/App'
import { tamaguiConfig } from './config'

const queryClient = new QueryClient()

const MobileApp = () => (
  <QueryClientProvider client={queryClient}>
    <TamaguiProvider config={tamaguiConfig}>
      <ToastProvider>
        <ToastViewport flexDirection="column" bottom={50} left={0} right={0} />
        <Toast />
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </ToastProvider>
    </TamaguiProvider>
  </QueryClientProvider>
)

AppRegistry.registerComponent('Mobile', () => MobileApp)

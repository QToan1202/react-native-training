import { useCallback } from 'react'
import { Linking } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { TamaguiProvider } from 'tamagui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'
import * as Notifications from 'expo-notifications'
import * as ExpoLinking from 'expo-linking'

import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { BottomNav, StackNavigation } from '@navigation'
import { useAuthStore } from '@stores'

import styles from './App.styles'
import StorybookUI from './.storybook'
import config from './tamagui.config'

SplashScreen.preventAutoHideAsync()
const queryClient = new QueryClient()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
})

const App = () => {
  const [isHydrated, user] = useAuthStore(useShallow((state) => [state.isHydrated, state.user]))

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && isHydrated) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isHydrated])

  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [ExpoLinking.createURL('/')],
    config: {
      screens: {
        HomeTab: {
          path: 'home',
          screens: {
            OrderDetail: 'orders/:id',
          },
        },
      },
    },
    async getInitialURL() {
      const url = await Linking.getInitialURL()

      if (url !== null) return url
      const response: Notifications.NotificationResponse | null =
        await Notifications.getLastNotificationResponseAsync()

      return response?.notification.request.content.data.redirect
    },

    subscribe(listener) {
      const onReceiveURL = ({ url }: { url: string }) => listener(url)
      const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL)

      const subscription = Notifications.addNotificationResponseReceivedListener(
        (response: Notifications.NotificationResponse) => {
          const url = response.notification.request.content.data.redirect

          listener(url)
        }
      )

      return () => {
        eventListenerSubscription.remove()
        subscription.remove()
      }
    },
  }

  if (!fontsLoaded) return null

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
          <NavigationContainer linking={linking}>
            {!user ? <StackNavigation.PublicStackNavigator /> : <BottomNav />}
          </NavigationContainer>
        </SafeAreaProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  )
}

const ENABLE_SB = false

export default ENABLE_SB ? StorybookUI : App

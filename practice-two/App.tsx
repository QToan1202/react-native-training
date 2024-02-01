import { Suspense, useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Linking } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { Spinner, TamaguiProvider } from 'tamagui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'
import * as Notifications from 'expo-notifications'
import * as ExpoLinking from 'expo-linking'

import { LinkingOptions, NavigationContainer, NavigationState } from '@react-navigation/native'
import { StackNavigation } from '@navigation'
import { useAuthStore, useNavigationStore } from '@stores'

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
  const [isHydrated, isAuthenticated] = useAuthStore(
    useShallow((state) => [state.isHydrated, state.isAuthenticated])
  )
  const [isHydratedState, navigationState, setNavigationState, isReady, setIsReady] =
    useNavigationStore(
      useShallow((state) => [
        state.isHydrated,
        state.navigationState,
        state.setNavigationState,
        state.isReady,
        state.setIsReady,
      ])
    )
  const [initState, setInitState] = useState()

  const [isFontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (isFontsLoaded && isHydrated) {
      await SplashScreen.hideAsync()
    }
  }, [isFontsLoaded, isHydrated])

  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [ExpoLinking.createURL('/')],
    config: {
      screens: {
        HomeStack: {
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

  const restoreState = useCallback(async () => {
    try {
      const url: string | null = await Linking.getInitialURL()
      if (url !== null) return
      // Restore state if no deep link
      const state = navigationState ? JSON.parse(navigationState) : undefined

      if (state !== undefined) setInitState(state)
    } finally {
      setIsReady(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isReady) restoreState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady])

  const handleStateChange = useCallback(
    (state: NavigationState | undefined) => {
      setNavigationState(state)
    },
    [setNavigationState]
  )

  if (!isFontsLoaded || !isHydratedState || !isReady) return <ActivityIndicator />

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
          <Suspense fallback={<Spinner size="large" color="$color.primary" />}>
            <NavigationContainer
              linking={linking}
              initialState={initState}
              onStateChange={handleStateChange}
            >
              {!isAuthenticated ? (
                <StackNavigation.PublicStackNavigator />
              ) : (
                <StackNavigation.PrivateStackNavigator />
              )}
            </NavigationContainer>
          </Suspense>
        </SafeAreaProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  )
}

const ENABLE_SB = false

export default ENABLE_SB ? StorybookUI : App

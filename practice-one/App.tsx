import { useCallback, useRef, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { StatusBar, StatusBarStyle } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from '@navigation'
import { asyncStoreService } from '@services'

import styles from './App.styles'
import StorybookUI from './.storybook'

SplashScreen.preventAutoHideAsync()
const FAKE_IS_LOGIN = true

const App = () => {
  const theme = useRef<StatusBarStyle>('auto')
  const [isCompleteLoadTheme, setIsCompleteLoadTheme] = useState(false)
  const loadTheme = useCallback(async (): Promise<StatusBarStyle> => {
    try {
      const storedTheme: string = await asyncStoreService.get<string>('appTheme')
      const isStatusBarStyle = (value: string): value is StatusBarStyle =>
        ['auto', 'inverted', 'light', 'dark'].includes(value)

      if (!isStatusBarStyle(storedTheme)) return 'light'

      return storedTheme
    } catch (error) {
      return 'light'
    } finally {
      setIsCompleteLoadTheme(true)
    }
  }, [])

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    theme.current = await loadTheme()
    if (fontsLoaded && isCompleteLoadTheme) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isCompleteLoadTheme, loadTheme])

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style={theme.current} />
      <NavigationContainer>
        {!FAKE_IS_LOGIN ? (
          <StackNavigation.PublicStackNavigator />
        ) : (
          <StackNavigation.PrivateStackNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const ENABLE_SB = false

export default ENABLE_SB ? StorybookUI : App

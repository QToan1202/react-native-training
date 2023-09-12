import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from '@navigation'

import styles from './App.styles'
import StorybookUI from './.storybook'

SplashScreen.preventAutoHideAsync()
const FAKE_IS_LOGIN = false

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
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

import { getStorybookUI } from '@storybook/react-native'

import './storybook.requires'

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

Font.loadAsync({
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
}).then(() => SplashScreen.hideAsync())

const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot

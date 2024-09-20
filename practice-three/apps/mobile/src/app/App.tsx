'use client'

import { JSX } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from 'react-native-bootsplash'

import { featureShell } from '@practice-three/shell'

// All features HOCs
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { withProfile } from '@practice-three/features/profile'
import { withWishlist } from '@practice-three/features/wishlist'
import { withOrder } from '@practice-three/features/order'

import { BottomTabParamsList, RootStackParamList, THOCsProps } from '@practice-three/shared/types'
import { ErrorScreen, NotFoundScreen } from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'

import { BottomNav } from '../navigation'
import { HomeScreen } from '../screens'
import { privateFeatureMap, publicFeatureMap, publicFeatureName } from '../config'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = {}
const initFeatures = featureShell(process.env.FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => JSX.Element }) => children?.(rest)
const WrapHOC = withWishlist(withProfile(withOrder(withProduct(withAuth(BaseApp)))))
const Tab = createBottomTabNavigator<BottomTabParamsList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  const [isHydrated, isAuthenticated] = useAuthStore((state) => [
    state.isHydrated,
    state.isAuthenticated,
  ])
  const handleRenderAppOnHydrated = async () => {
    isHydrated && (await BootSplash.hide({ fade: true }))
  }

  if (!isHydrated) return null

  return (
    <WrapHOC category={initFeatures} navigatorData={INIT_NAVIGATOR_DATA}>
      {({ navigatorData }) => {
        const convertNavigatorData = navigatorData as unknown as () => JSX.Element
        const renderBottomTabs = Object.keys(convertNavigatorData)
          .filter((featureName: string) => featureName !== publicFeatureName)
          .map((featureName: string) => (
            <Tab.Screen
              key={privateFeatureMap.get(featureName)}
              name={privateFeatureMap.get(featureName)}
              component={convertNavigatorData[featureName]}
            />
          ))
        const PrivateStack = () => (
          <BottomNav>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            {renderBottomTabs}
          </BottomNav>
        )

        return (
          <NavigationContainer onReady={handleRenderAppOnHydrated}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {!isAuthenticated ? (
                <Stack.Screen
                  name={publicFeatureMap.get(publicFeatureName)}
                  component={convertNavigatorData[publicFeatureName]}
                />
              ) : (
                <Stack.Screen name="BottomTabs" component={PrivateStack} />
              )}
              <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )
      }}
    </WrapHOC>
  )
}

export default withErrorBoundary(gestureHandlerRootHOC(App, { flex: 1 }), {
  FallbackComponent: ErrorScreen,
})

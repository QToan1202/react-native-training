'use client'

import { JSX } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import BootSplash from 'react-native-bootsplash'

import {
  AUTH_FEATURE,
  CART_FEATURE,
  featureShell,
  PRODUCT_FEATURE,
  PROFILE_FEATURE,
} from '@practice-three/shell'
import { BottomTabParamsList, RootStackParamList, THOCsProps } from '@practice-three/shared/types'
import { withAuth } from '@practice-three/features/authentication'
import { withProduct } from '@practice-three/features/product'
import { withCart } from '@practice-three/features/cart'
import { withCheckout } from '@practice-three/features/checkout'
import { withProfile } from '@practice-three/features/profile'
import { ErrorScreen, NotFoundScreen } from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'

import { BottomNav } from '../navigation'
import { HomeScreen } from '../screens'

const INIT_NAVIGATOR_DATA: THOCsProps['navigatorData'] = {}
const initFeatures = featureShell(process.env.FEATURES)
const BaseApp = ({
  children,
  ...rest
}: THOCsProps & { children?: (args: THOCsProps) => JSX.Element }) => children?.(rest)
const WrapHOC = withProfile(withCheckout(withCart(withProduct(withAuth(BaseApp)))))
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
        const PrivateStack = () => (
          <BottomNav>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="ProductTab" component={convertNavigatorData[PRODUCT_FEATURE.NAME]} />
            <Tab.Screen name="WishlistTab" component={convertNavigatorData[PRODUCT_FEATURE.NAME]} />
            <Tab.Screen name="CartTab" component={convertNavigatorData[CART_FEATURE.NAME]} />
            <Tab.Screen name="ProfileTab" component={convertNavigatorData[PROFILE_FEATURE.NAME]} />
          </BottomNav>
        )

        return (
          <NavigationContainer onReady={handleRenderAppOnHydrated}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {!isAuthenticated ? (
                <Stack.Screen
                  name="AuthStack"
                  component={convertNavigatorData[AUTH_FEATURE.NAME]}
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

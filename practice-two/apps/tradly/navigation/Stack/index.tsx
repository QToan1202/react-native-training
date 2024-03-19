import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { COLORS } from '@practice-two/shared/constants'
import { RootStackParamList } from '@practice-two/shared/types'

// Features Navigator
import { OnboardingStack } from '@practice-two/features/onboarding'
import { AuthStack } from '@practice-two/features/auth'
import { WishlistStack } from '@practice-two/features/wishlist'
import { CheckoutStack } from '@practice-two/features/checkout'
import { ProductStack } from '@practice-two/features/product'
import { BrowseStack } from '@practice-two/features/browse'

import BottomNav from '../Tab'

const Stack = createNativeStackNavigator<RootStackParamList>()

const PublicStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
    <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
    <Stack.Screen name="AuthStack" component={AuthStack} />
  </Stack.Navigator>
)

const HeaderStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WishlistStack" component={WishlistStack} />
    <Stack.Screen name="CheckoutStack" component={CheckoutStack} />
  </Stack.Navigator>
)

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProductStack" component={ProductStack} />
    <Stack.Screen name="HeaderStack" component={HeaderStack} />
  </Stack.Navigator>
)

const PrivateStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
    <Stack.Screen name="Tabs" component={BottomNav} />
    <Stack.Screen name="HomeStack" component={HomeStack} />
    <Stack.Screen name="BrowseStack" component={BrowseStack} />
  </Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator }

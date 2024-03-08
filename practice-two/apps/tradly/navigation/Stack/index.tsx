import { lazy } from 'react'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { COLORS } from '@practice-two/shared/constants'
import { RootStackParamList } from '@practice-two/shared/types'
import BottomNav from '../Tab'

// Components
const BackBar = lazy(() => import('../../components/Bar/Instance/Back'))
const CategoryBar = lazy(() => import('../../components/Bar/Instance/Category'))

const Stack = createNativeStackNavigator<RootStackParamList>()
const CustomHeader = (Element: React.JSX.ElementType, props: NativeStackHeaderProps) => (
  <Element {...props} />
)

const PublicStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}
  >
    <Stack.Screen
      name="Onboarding"
      getComponent={() => require('../../../features/Onboarding/screens').default}
    />
    <Stack.Screen
      name="Login"
      getComponent={() => require('../../../features/Login/screens').default}
    />
    <Stack.Screen
      name="SignUp"
      getComponent={() => require('../../../features/SignUp/screens').default}
      options={{
        headerShown: true,
        headerTitle: '',
        headerStyle: { backgroundColor: COLORS.PRIMARY },
        headerShadowVisible: false,
        headerTintColor: COLORS.WHITE,
      }}
    />
  </Stack.Navigator>
)

const TabBarStack = (
  <Stack.Group
    screenOptions={{
      header: (props: NativeStackHeaderProps) => CustomHeader(BackBar, props),
    }}
  >
    <Stack.Screen
      name="Wishlist"
      getComponent={() => require('../../../features/Wishlist/screens').default}
      options={{ headerTitle: 'wishlist' }}
    />
    <Stack.Screen
      name="Cart"
      getComponent={() => require('../../../features/Checkout/screens/Cart').default}
      options={{ headerTitle: 'my cart' }}
    />
    <Stack.Screen
      name="AddAddress"
      getComponent={() => require('../../../features/Checkout/screens/AddAddress').default}
      options={{ headerTitle: 'add a new address' }}
    />
    <Stack.Screen
      name="AddCard"
      getComponent={() => require('../../../features/Checkout/screens/AddCard').default}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Payment"
      getComponent={() => require('../../../features/Checkout/screens/Payment').default}
      options={{ headerTitle: 'payment option' }}
    />
    <Stack.Screen
      name="OrderDetail"
      getComponent={() => require('../../../features/Checkout/screens/OrderDetail').default}
      options={{ headerTitle: 'order details' }}
    />
  </Stack.Group>
)

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductDetail"
      getComponent={() => require('../../../features/Product/screens').default}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategoryDetail"
      getComponent={() => require('../../../features/Category/screens').default}
      options={{
        header: (props: NativeStackHeaderProps) => CustomHeader(CategoryBar, props),
      }}
    />
    {TabBarStack}
  </Stack.Navigator>
)

const BrowseStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductDetail"
      getComponent={() => require('../../../features/Product/screens').default}
      options={{ headerShown: false }}
    />
    {TabBarStack}
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

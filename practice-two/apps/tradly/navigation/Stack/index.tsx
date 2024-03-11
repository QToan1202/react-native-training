import { lazy } from 'react'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { Onboarding } from '@practice-two/features/onboarding'
import { Login, SignUp } from '@practice-two/features/auth'
import { Cart, AddAddress, AddCard, Payment, OrderDetail } from '@practice-two/features/checkout'
import { Wishlist } from '@practice-two/features/wishlist'
import { Product } from '@practice-two/features/product'
import { CategoryDetail } from '@practice-two/features/browse'
import { Feature } from '@practice-two/shared/hocs'

import { COLORS } from '@practice-two/shared/constants'
import { RootStackParamList } from '@practice-two/shared/types'
import BottomNav from '../Tab'

// Components
const BackBar = lazy(() =>
  import('@practice-two/shared/components').then((module) => ({ default: module.BackBar }))
)
const CategoryBar = lazy(() =>
  import('@practice-two/shared/components').then((module) => ({ default: module.CategoryBar }))
)

const Stack = createNativeStackNavigator<RootStackParamList>()
const CustomHeader = (Element: React.JSX.ElementType, props: NativeStackHeaderProps) => (
  <Element {...props} />
)

const PublicStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}
  >
    <Feature feat="onboarding">
      <Stack.Screen name="Onboarding" getComponent={() => Onboarding} />
    </Feature>
    <Feature feat="authentication">
      <Stack.Screen name="Login" getComponent={() => Login} />
      <Stack.Screen
        name="SignUp"
        getComponent={() => SignUp}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: { backgroundColor: COLORS.PRIMARY },
          headerShadowVisible: false,
          headerTintColor: COLORS.WHITE,
        }}
      />
    </Feature>
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
      getComponent={() => Wishlist}
      options={{ headerTitle: 'wishlist' }}
    />
    <Stack.Screen name="Cart" getComponent={() => Cart} options={{ headerTitle: 'my cart' }} />
    <Stack.Screen
      name="AddAddress"
      getComponent={() => AddAddress}
      options={{ headerTitle: 'add a new address' }}
    />
    <Stack.Screen name="AddCard" getComponent={() => AddCard} options={{ headerShown: false }} />
    <Stack.Screen
      name="Payment"
      getComponent={() => Payment}
      options={{ headerTitle: 'payment option' }}
    />
    <Stack.Screen
      name="OrderDetail"
      getComponent={() => OrderDetail}
      options={{ headerTitle: 'order details' }}
    />
  </Stack.Group>
)

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductDetail"
      getComponent={() => Product}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategoryDetail"
      getComponent={() => CategoryDetail}
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
      getComponent={() => Product}
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

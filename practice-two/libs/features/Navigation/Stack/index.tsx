import { lazy } from 'react'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams } from '@react-navigation/native'

import { COLORS } from '@constants'
import BottomNav, { TabParamsList } from '@navigation/Tab'

// Components
const BackBar = lazy(() => import('../../../shared/components/Bar/Instance/Back'))
const CategoryBar = lazy(() => import('../../../shared/components/Bar/Instance/Category'))

type PublicStackParamsList = {
  Onboarding: undefined
  Login: undefined
  SignUp: undefined
}

type HomeStackParamsList = {
  Home: undefined
  CategoryDetail: { name: string }
  ProductDetail: { id: string } // ID of the product
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: { id: string } // ID of the order
  Wishlist: undefined
}

type BrowseStackParamsList = {
  Browse: { search: string } | undefined
  ProductDetail: { id: string }
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: { id: string } // ID of the order
  Wishlist: undefined
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamsList>
  HomeStack: NavigatorScreenParams<HomeStackParamsList>
  BrowseStack: NavigatorScreenParams<BrowseStackParamsList>
  StoreStack: undefined
  OrderHistoryStack: undefined
  ProfileStack: undefined
} & PublicStackParamsList &
  HomeStackParamsList &
  BrowseStackParamsList &
  TabParamsList

const Stack = createNativeStackNavigator<RootStackParamList>()
const CustomHeader = (Element: React.JSX.ElementType, props: NativeStackHeaderProps) => (
  <Element {...props} />
)

const PublicStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}
  >
    <Stack.Screen name="Onboarding" getComponent={() => require('@screens/Onboarding').default} />
    <Stack.Screen name="Login" getComponent={() => require('@screens/Login').default} />
    <Stack.Screen
      name="SignUp"
      getComponent={() => require('@screens/SignUp').default}
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
      getComponent={() => require('@screens/Wishlist').default}
      options={{ headerTitle: 'wishlist' }}
    />
    <Stack.Screen
      name="Cart"
      getComponent={() => require('@screens/Checkout/Cart').default}
      options={{ headerTitle: 'my cart' }}
    />
    <Stack.Screen
      name="AddAddress"
      getComponent={() => require('@screens/Checkout/AddAddress').default}
      options={{ headerTitle: 'add a new address' }}
    />
    <Stack.Screen
      name="AddCard"
      getComponent={() => require('@screens/Checkout/AddCard').default}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Payment"
      getComponent={() => require('@screens/Checkout/Payment').default}
      options={{ headerTitle: 'payment option' }}
    />
    <Stack.Screen
      name="OrderDetail"
      getComponent={() => require('@screens/Checkout/OrderDetail').default}
      options={{ headerTitle: 'order details' }}
    />
  </Stack.Group>
)

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductDetail"
      getComponent={() => require('@screens/ProductDetail').default}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CategoryDetail"
      getComponent={() => require('@screens/CategoryDetail').default}
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
      getComponent={() => require('@screens/ProductDetail').default}
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
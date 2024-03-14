import { Suspense, lazy } from 'react'
import { Spinner } from 'tamagui'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

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
  <Suspense fallback={<Spinner size="large" color="$color.primary" />}>
    <Element {...props} />
  </Suspense>
)

const OnboardingStack = () => (
  <Feature feat="onboarding">
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
      <Stack.Screen
        name="Onboarding"
        getComponent={() => require('@practice-two/features/onboarding').Onboarding}
      />
    </Stack.Navigator>
  </Feature>
)

const AuthStack = () => (
  <Feature feat="authentication">
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
      <Stack.Screen
        name="Login"
        getComponent={() => require('@practice-two/features/auth').Login}
      />
      <Stack.Screen
        name="SignUp"
        getComponent={() => require('@practice-two/features/auth').SignUp}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: { backgroundColor: COLORS.PRIMARY },
          headerShadowVisible: false,
          headerTintColor: COLORS.WHITE,
        }}
      />
    </Stack.Navigator>
  </Feature>
)

const PublicStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
    <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
    <Stack.Screen name="AuthStack" component={AuthStack} />
  </Stack.Navigator>
)

const CheckoutStack = () => (
  <Feature feat="checkout">
    <Stack.Navigator
      screenOptions={{ header: (props: NativeStackHeaderProps) => CustomHeader(BackBar, props) }}
    >
      <Stack.Screen
        name="Wishlist"
        getComponent={() => require('@practice-two/features/wishlist').Wishlist}
        options={{ headerTitle: 'wishlist' }}
      />
      <Stack.Screen
        name="Cart"
        getComponent={() => require('@practice-two/features/checkout').Cart}
        options={{ headerTitle: 'my cart' }}
      />
      <Stack.Screen
        name="AddAddress"
        getComponent={() => require('@practice-two/features/checkout').AddAddress}
        options={{ headerTitle: 'add a new address' }}
      />
      <Stack.Screen
        name="AddCard"
        getComponent={() => require('@practice-two/features/checkout').AddCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        getComponent={() => require('@practice-two/features/checkout').Payment}
        options={{ headerTitle: 'payment option' }}
      />
      <Stack.Screen
        name="OrderDetail"
        getComponent={() => require('@practice-two/features/checkout').OrderDetail}
        options={{ headerTitle: 'order details' }}
      />
    </Stack.Navigator>
  </Feature>
)

const ProductStack = () => (
  <Feature feat="product">
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetail"
        getComponent={() => require('@practice-two/features/product').Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </Feature>
)

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductStack" component={ProductStack} options={{ headerShown: false }} />
    <Stack.Screen
      name="CategoryDetail"
      getComponent={() => require('@practice-two/features/browse').CategoryDetail}
      options={{
        header: (props: NativeStackHeaderProps) => CustomHeader(CategoryBar, props),
      }}
    />
    <Stack.Screen
      name="CheckoutStack"
      component={CheckoutStack}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

const BrowseStack = () => (
  <Feature feat="browse">
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetail"
        getComponent={() => require('@practice-two/features/product').Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckoutStack"
        component={CheckoutStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </Feature>
)

const PrivateStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
    <Stack.Screen name="Tabs" component={BottomNav} />
    <Stack.Screen name="HomeStack" component={HomeStack} />
    <Stack.Screen name="BrowseStack" component={BrowseStack} />
  </Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator }

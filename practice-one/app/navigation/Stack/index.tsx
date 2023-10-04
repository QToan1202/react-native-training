import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNav, { TabParamsList } from '@navigation/Tab'
import {
  AddAddress,
  AddCard,
  Cart,
  CategoryDetail,
  Dashboard,
  Login,
  Onboarding,
  OrderDetail,
  Payment,
  ProductDetail,
  SignUp,
} from '@screens'
import { CategoryBar, CheckoutBar } from '@components'
import { COLORS } from '@constants'

export type RootStackParamList = {
  Tabs: undefined
  Onboarding: undefined
  Login: undefined
  SignUp: undefined
  CategoryDetail: { id: string; name: string } // ID of the corresponding category
  ProductDetail: { id: string } // ID of the product
  Wishlist: { id: string } // ID of the current login user
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: undefined
} & TabParamsList

const Stack = createNativeStackNavigator<RootStackParamList>()
const CustomHeader = (Element: React.JSX.ElementType, props: NativeStackHeaderProps) => (
  <Element {...props} />
)

const PublicStackNavigator = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
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

const PrivateStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomNav} />
  </Stack.Navigator>
)

const CheckOutStack = (
  <Stack.Group
    screenOptions={{
      headerShown: true,
      header: (props: NativeStackHeaderProps) => CustomHeader(CheckoutBar, props),
    }}
  >
    <Stack.Screen name="Cart" component={Cart} options={{ headerTitle: 'my cart' }} />
    <Stack.Screen
      name="AddAddress"
      component={AddAddress}
      options={{ headerTitle: 'add a new address' }}
    />
    <Stack.Screen name="AddCard" component={AddCard} options={{ headerTitle: 'add card' }} />
    <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: 'payment option' }} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Group>
)

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Dashboard} />
    <Stack.Screen
      name="CategoryDetail"
      component={CategoryDetail}
      options={{
        headerShown: true,
        header: (props: NativeStackHeaderProps) => CustomHeader(CategoryBar, props),
      }}
    />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    {CheckOutStack}
  </Stack.Navigator>
)

const BrowseStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>{CheckOutStack}</Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator, HomeStack, BrowseStack }

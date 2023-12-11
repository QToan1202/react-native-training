import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  AddAddress,
  AddCard,
  Browse,
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
import { BrowseBar, CategoryBar, CheckoutBar, HomeBar } from '@components'
import { COLORS } from '@constants'

export type RootStackParamList = {
  Tabs: undefined
  Home: undefined
  Browse: { search: string } | undefined // Search keyword
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
  OrderDetail: { id: string } // ID of the order
}

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
    <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const CheckOutStack = (
  <Stack.Group
    screenOptions={{
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
    <Stack.Screen
      name="OrderDetail"
      component={OrderDetail}
      options={{ headerTitle: 'order details' }}
    />
  </Stack.Group>
)

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Dashboard}
      options={{
        headerTitle: 'Groceries',
        header: (props: NativeStackHeaderProps) => CustomHeader(HomeBar, props),
      }}
    />
    <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
    <Stack.Screen
      name="CategoryDetail"
      component={CategoryDetail}
      options={{
        header: (props: NativeStackHeaderProps) => CustomHeader(CategoryBar, props),
      }}
    />
    {CheckOutStack}
  </Stack.Navigator>
)

const BrowseStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Browse"
      component={Browse}
      options={{
        header: (props: NativeStackHeaderProps) => CustomHeader(BrowseBar, props),
      }}
    />
    {CheckOutStack}
  </Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator, HomeStack, BrowseStack }

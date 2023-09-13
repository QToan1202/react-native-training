import { createNativeStackNavigator } from '@react-navigation/native-stack'
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

export type RootStackParamList = {
  Tabs: undefined
  Onboarding: undefined
  Login: undefined
  SignUp: undefined
  Home: undefined
  CategoryDetail: { id: string } // ID of the corresponding category
  Browse: { search: string } // Search keyword
  ProductDetail: { id: string } // ID of the product
  Wishlist: { id: string } // ID of the current login user
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: undefined
} & TabParamsList

const Stack = createNativeStackNavigator<RootStackParamList>()

const PublicStackNavigator = () => (
  <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
)

const PrivateStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomNav} />
    <Stack.Screen name="Home" component={Dashboard} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="AddAddress" component={AddAddress} />
    <Stack.Screen name="AddCard" component={AddCard} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator }
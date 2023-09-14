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
import { CategoryBar } from '@components'
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
    <Stack.Group screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Group>
  </Stack.Navigator>
)

export default { PrivateStackNavigator, PublicStackNavigator }

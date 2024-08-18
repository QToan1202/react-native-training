import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CheckoutStack } from '@practice-three/types'

import {
  AddAddressScreen,
  AddCardScreen,
  AddressScreen,
  OrderScreen,
  PaymentScreen,
} from '../screens'

const Stack = createNativeStackNavigator<CheckoutStack>()

const CheckoutStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AddAddress" component={AddAddressScreen} />
    <Stack.Screen name="AddPayment" component={AddCardScreen} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
  </Stack.Navigator>
)

export default CheckoutStack

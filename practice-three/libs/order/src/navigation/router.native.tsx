import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OrderStack } from '@practice-three/shared/types'

import {
  AddAddressScreen,
  AddCardScreen,
  AddressScreen,
  CartScreen,
  OrderScreen,
  PaymentScreen,
  PromoCodeScreen,
} from '../screens'

const Stack = createNativeStackNavigator<OrderStack>()

const OrderStacks = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="PromoCode" component={PromoCodeScreen} />
    <Stack.Screen name="AddAddress" component={AddAddressScreen} />
    <Stack.Screen name="AddPayment" component={AddCardScreen} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
  </Stack.Navigator>
)

export default OrderStacks

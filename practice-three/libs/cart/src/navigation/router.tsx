import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CartStack } from '@practice-three/types'

import { CartScreen, PromoCodeScreen } from '../screens'

const Stack = createNativeStackNavigator<CartStack>()

const CartStacks = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="PromoCode" component={PromoCodeScreen} />
  </Stack.Navigator>
)

export default CartStacks

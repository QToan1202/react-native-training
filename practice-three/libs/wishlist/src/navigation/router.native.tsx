import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProductStack } from '@practice-three/shared/types'

import { WishlistScreen } from '../screens'

const Stack = createNativeStackNavigator<ProductStack>()

const WishlistStacks = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Wishlist" component={WishlistScreen} />
  </Stack.Navigator>
)

export default WishlistStacks

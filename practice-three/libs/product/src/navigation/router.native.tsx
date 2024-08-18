import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProductStack } from '@shared/types'

import { ProductDetailScreen, SearchScreen, WishlistScreen } from '../screens'

const Stack = createNativeStackNavigator<ProductStack>()

const ProductStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} />
  </Stack.Navigator>
)

export default ProductStack

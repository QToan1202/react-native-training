import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'

const Stack = createNativeStackNavigator<RootStackParamList>()

const ProductStack = () => (
  <Feature feat="product">
    <Stack.Navigator>
      <Stack.Screen
        name="ProductDetail"
        getComponent={() => require('../screens').default}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </Feature>
)

export default ProductStack

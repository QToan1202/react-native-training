import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'
import { BackBar } from '@practice-two/shared/components'
import { CustomHeader } from '@practice-two/shared/utils'

const Stack = createNativeStackNavigator<RootStackParamList>()

const CheckoutStack = () => (
  <Feature feat="checkout">
    <Stack.Navigator
      screenOptions={{ header: (props: NativeStackHeaderProps) => CustomHeader(BackBar, props) }}
    >
      <Stack.Screen
        name="Cart"
        getComponent={() => require('../screens').Cart}
        options={{ headerTitle: 'my cart' }}
      />
      <Stack.Screen
        name="AddAddress"
        getComponent={() => require('../screens').AddAddress}
        options={{ headerTitle: 'add a new address' }}
      />
      <Stack.Screen
        name="AddCard"
        getComponent={() => require('../screens').AddCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        getComponent={() => require('../screens').Payment}
        options={{ headerTitle: 'payment option' }}
      />
      <Stack.Screen
        name="OrderDetail"
        getComponent={() => require('../screens').OrderDetail}
        options={{ headerTitle: 'order details' }}
      />
    </Stack.Navigator>
  </Feature>
)

export default CheckoutStack

import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'

import { CustomHeader } from '@practice-two/shared/utils'
import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'
import { BackBar } from '@practice-two/shared/components'

const Stack = createNativeStackNavigator<RootStackParamList>()

const WishlistStack = () => (
  <Feature feat="wishlist">
    <Stack.Navigator
      screenOptions={{ header: (props: NativeStackHeaderProps) => CustomHeader(BackBar, props) }}
    >
      <Stack.Screen
        name="Wishlist"
        getComponent={() => require('../screens').default}
        options={{ headerTitle: 'wishlist' }}
      />
    </Stack.Navigator>
  </Feature>
)

export default WishlistStack

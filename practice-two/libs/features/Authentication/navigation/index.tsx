import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'
import { COLORS } from '@practice-two/shared/constants'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AuthStack = () => (
  <Feature feat="authentication">
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
      <Stack.Screen name="Login" getComponent={() => require('../screens').Login} />
      <Stack.Screen
        name="SignUp"
        getComponent={() => require('../screens').SignUp}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: { backgroundColor: COLORS.PRIMARY },
          headerShadowVisible: false,
          headerTintColor: COLORS.WHITE,
        }}
      />
    </Stack.Navigator>
  </Feature>
)

export default AuthStack

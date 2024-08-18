import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '@practice-two/shared/types'
import { Feature } from '@practice-two/shared/hocs'
import { COLORS } from '@practice-two/shared/constants'

const Stack = createNativeStackNavigator<RootStackParamList>()

const OnboardingStack = () => (
  <Feature feat="onboarding">
    <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: COLORS.PRIMARY }}>
      <Stack.Screen name="Onboarding" getComponent={() => require('../screens').default} />
    </Stack.Navigator>
  </Feature>
)

export default OnboardingStack

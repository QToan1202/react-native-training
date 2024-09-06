import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileStack } from '@practice-three/types'

import { ProfileScreen } from '../screens'

const Stack = createNativeStackNavigator<ProfileStack>()

const ProfileStacks = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
)

export default ProfileStacks

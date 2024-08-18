import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthenticationStack } from '@shared/types'
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VerificationScreen,
} from '../screens'

const Stack = createNativeStackNavigator<AuthenticationStack>()

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
  </Stack.Navigator>
)

export default AuthStack

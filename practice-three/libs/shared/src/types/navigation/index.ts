import { NavigatorScreenParams } from '@react-navigation/native'

export type AuthenticationStack = {
  Login: undefined
  Register: undefined
  Verification: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
}

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthenticationStack>
}

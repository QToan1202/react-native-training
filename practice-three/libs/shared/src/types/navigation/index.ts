import { NavigatorScreenParams } from '@react-navigation/native'

export type AuthenticationStack = {
  Login: undefined
  Register: undefined
  Verification: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
}

export type ProductStack = {
  Search: undefined
  ProductDetail: { id: string }
  Wishlist: undefined
}

export type CartStack = {
  Cart: undefined
  PromoCode: undefined
}

export type CheckoutStack = {
  Address: undefined
  AddAddress: undefined | { id: string }
  Payment: undefined
  AddPayment: undefined
}

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthenticationStack>
  ProductStack: NavigatorScreenParams<ProductStack>
  CartStack: NavigatorScreenParams<CartStack>
  CheckoutStack: NavigatorScreenParams<CheckoutStack>
}

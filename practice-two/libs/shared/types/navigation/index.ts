import { NavigatorScreenParams } from '@react-navigation/native'

type OnboardingStack = {
  Onboarding: undefined
}

type AuthStack = {
  Login: undefined
  SignUp: undefined
}

type PublicStackParamsList = OnboardingStack & AuthStack

type CheckoutStack = {
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: { id: string } // ID of the order
}

type HomeStackParamsList = {
  Home: undefined
  CategoryDetail: { name: string }
  ProductDetail: { id: string } // ID of the product
  Wishlist: undefined
} & CheckoutStack

type BrowseStackParamsList = {
  Browse: { search: string } | undefined
  ProductDetail: { id: string }
  Wishlist: undefined
} & CheckoutStack

export type TabParamsList = {
  HomeTab: undefined
  BrowseTab: undefined
  ProductTab: undefined
  OrderHistoryTab: undefined
  ProfileTab: undefined
}

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamsList>
  HomeStack: NavigatorScreenParams<HomeStackParamsList>
  BrowseStack: NavigatorScreenParams<BrowseStackParamsList>
  OnboardingStack: NavigatorScreenParams<OnboardingStack>
  AuthStack: NavigatorScreenParams<AuthStack>
  CheckoutStack: NavigatorScreenParams<CheckoutStack>
  StoreStack: undefined
  OrderHistoryStack: undefined
  ProfileStack: undefined
} & PublicStackParamsList &
  HomeStackParamsList &
  BrowseStackParamsList &
  TabParamsList

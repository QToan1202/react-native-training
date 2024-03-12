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

type ProductStack = {
  ProductDetail: { id: string } // ID of the product
}

type HomeStackParamsList = {
  Home: undefined
  ProductStack: NavigatorScreenParams<ProductStack>
  CategoryDetail: { name: string }
  Wishlist: undefined
} & CheckoutStack &
  ProductStack

type BrowseStackParamsList = {
  Browse: { search: string } | undefined
  Wishlist: undefined
} & CheckoutStack &
  ProductStack

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
  ProductStack: NavigatorScreenParams<ProductStack>
  StoreStack: undefined
  OrderHistoryStack: undefined
  ProfileStack: undefined
} & PublicStackParamsList &
  HomeStackParamsList &
  BrowseStackParamsList &
  TabParamsList

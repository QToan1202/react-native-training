import { NavigatorScreenParams } from '@react-navigation/native'

type PublicStackParamsList = {
  Onboarding: undefined
  Login: undefined
  SignUp: undefined
}

type HomeStackParamsList = {
  Home: undefined
  CategoryDetail: { name: string }
  ProductDetail: { id: string } // ID of the product
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: { id: string } // ID of the order
  Wishlist: undefined
}

type BrowseStackParamsList = {
  Browse: { search: string } | undefined
  ProductDetail: { id: string }
  Cart: undefined
  AddAddress: undefined
  AddCard: undefined
  Payment: undefined
  OrderDetail: { id: string } // ID of the order
  Wishlist: undefined
}

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
  StoreStack: undefined
  OrderHistoryStack: undefined
  ProfileStack: undefined
} & PublicStackParamsList &
  HomeStackParamsList &
  BrowseStackParamsList &
  TabParamsList

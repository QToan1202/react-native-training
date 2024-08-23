import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

/**
 * FEATURE STACK
 */

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
  Order: undefined
}

export type OrderStack = CartStack & CheckoutStack

export type ProfileStack = {
  Profile: undefined
}

export type WishlistStack = {
  ProductDetail: { id: string }
  Wishlist: undefined
}

export type HomeStack = {
  Home: undefined
}

/**
 * BOTTOM TABS
 */

export type BottomTabParamsList = {
  HomeTab: NavigatorScreenParams<HomeStack>
  ProductTab: NavigatorScreenParams<ProductStack>
  WishlistTab: NavigatorScreenParams<WishlistStack>
  CartTab: NavigatorScreenParams<OrderStack>
  ProfileTab: NavigatorScreenParams<ProfileStack>
}

/**
 * ROOT STACK
 */

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamsList>
  AuthStack: NavigatorScreenParams<AuthenticationStack>
  NotFound: undefined
}

/**
 * HELPER TYPES FOR ROOT STACK AND BOTTOM TABS
 */

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

export type BottomTabsStackScreenProps<T extends keyof BottomTabParamsList> = BottomTabScreenProps<
  BottomTabParamsList,
  T
>

/**
 * HELPER TYPES FOR AUTH STACK
 */

export type AuthStackScreenProps<T extends keyof AuthenticationStack> = CompositeScreenProps<
  NativeStackScreenProps<AuthenticationStack, T>,
  RootStackScreenProps<keyof RootStackParamList>
>

/**
 * HELPER TYPES FOR BOTTOM TABS SCREENS
 */

export type HomeTabScreenProps<T extends keyof HomeStack> = CompositeScreenProps<
  BottomTabScreenProps<HomeStack, T>,
  BottomTabsStackScreenProps<keyof BottomTabParamsList>
>

export type ProductTabScreenProps<T extends keyof ProductStack> = CompositeScreenProps<
  BottomTabScreenProps<ProductStack, T>,
  BottomTabsStackScreenProps<keyof BottomTabParamsList>
>

export type WishlistTabScreenProps<T extends keyof WishlistStack> = CompositeScreenProps<
  BottomTabScreenProps<WishlistStack, T>,
  BottomTabsStackScreenProps<keyof BottomTabParamsList>
>

export type OrderTabScreenProps<T extends keyof OrderStack> = CompositeScreenProps<
  BottomTabScreenProps<OrderStack, T>,
  BottomTabsStackScreenProps<keyof BottomTabParamsList>
>

export type ProfileTabScreenProps<T extends keyof ProfileStack> = CompositeScreenProps<
  BottomTabScreenProps<ProfileStack, T>,
  BottomTabsStackScreenProps<keyof BottomTabParamsList>
>

/**
 * DECLARE GLOBAL TYPE FOR ROOT NAVIGATOR
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

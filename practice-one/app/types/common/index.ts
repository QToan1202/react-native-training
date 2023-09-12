import { ImageProps, ImageSourcePropType } from 'react-native'

import { IUserForms } from '../users'

export interface IInputSearch {
  search: string
}

export interface IForm extends IInputSearch, IUserForms {}

export type TButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

export type TSize = 'sm' | 'md' | 'lg' | 'xl'

export interface IIconList {
  label: string
  icon: ImageProps['source']
  action: () => void
}

export type TAlignAvatar = 'inline' | 'block'

export type TCard = 'visa' | 'mastercard' | 'normal'

export interface IFlatListBase {
  id: string
  key?: string
  name?: string
}

export interface IRadioItem extends IFlatListBase {
  name: string
}

export type TTrackerStatus = 'order placed' | 'payment confirmed' | 'processed' | 'delivered'

export interface IDropDownItem extends IFlatListBase {
  name: string
  value: string
}

export interface IOnboardingScreenView {
  id: string
  img: ImageSourcePropType
  title: string
}

export interface IDetailInfo {
  id: string | number
  label: string
  value: string
}

export interface ICardInformation {
  name: string
  cardNumber: string
  cvc: number
  expires: string
}

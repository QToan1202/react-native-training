import { ImageProps } from 'react-native'

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

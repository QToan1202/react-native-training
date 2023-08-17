import { IUserForms } from '../users'

export interface IInputSearch {
  search: string
}

export interface IForm extends IInputSearch, IUserForms {}

export type TButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

export type TSize = 'sm' | 'md' | 'lg' | 'xl'

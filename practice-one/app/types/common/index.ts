import { IUserForms } from '../users'

export interface IInputSearch {
  search: string
}

export interface IForm extends IInputSearch, IUserForms {}

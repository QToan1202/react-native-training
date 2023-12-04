export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export type TLoginForm = Pick<IUser, 'email' | 'phone' | 'password'>

export interface IAddressBase {
  name: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: number
}

export interface IAddress extends IAddressBase {
  userId: number
  id: number
}

export interface ICardBase {
  number: string
  name: string
  expired: string
  cvc: string
}

export interface ICard extends ICardBase {
  userId: number
  id: number
}

export interface IUserForms extends IUser, TLoginForm, IAddressBase, ICardBase {}

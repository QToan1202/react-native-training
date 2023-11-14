export interface IRegisterForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export type TLoginForm = Pick<IRegisterForm, 'email' | 'phone' | 'password'>

export interface IAddressForm {
  name: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: number
}

export interface ICardForm {
  number: string
  name: string
  expiresDate: string
  cvc: string
}

export interface IUserForms extends IRegisterForm, TLoginForm, IAddressForm, ICardForm {}

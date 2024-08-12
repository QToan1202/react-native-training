export type TLoginForm = {
  account: string
  password: string
}

export type TResetPassword = {
  password: string
  confirmPassword: string
}

export type TRegisterForm = {
  name: string
  account: string
  password: string
  confirmPassword: string
}

export type TSearchField = {
  search: string
}

export type TFormValues = TLoginForm & TRegisterForm & TSearchField

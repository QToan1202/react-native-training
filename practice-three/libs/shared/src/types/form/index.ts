export type TLoginForm = {
  email: string
  phone: string
  password: string
}

export type TRegisterForm = {
  name: string
  email: string
  account: string
  phone: string
  password: string
  confirmPassword: string
}

export type TFormValues = TLoginForm & TRegisterForm

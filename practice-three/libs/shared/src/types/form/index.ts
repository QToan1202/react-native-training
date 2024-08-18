export type TLoginForm = {
  email: string
  phone: string
  password: string
}

export type TRegisterForm = {
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export type TFormValues = TLoginForm & TRegisterForm

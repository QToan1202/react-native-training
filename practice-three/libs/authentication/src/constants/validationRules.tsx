import { ReactNode } from 'react'

import { TLoginForm, TRegisterForm, TResetPassword } from '@practice-three/shared/types'
import { TTransformFields } from '@practice-three/shared/util'

import REGEX from './regex'
import { Lock, Mail, User } from '../assets/images'

type TLoginFormFields = TTransformFields<TLoginForm, { placeholder?: string }>
export const LOGIN_FORM: TLoginFormFields = {
  ACCOUNT: {
    label: 'account',
    title: '',
    placeholder: 'Your Email / Phone Number',
    rules: {
      required: true,
      /*
       * Expect to meet one of the validate criteria
       * Either `email` or `phone`
       */
      validate: (accountValue: string) => {
        switch (true) {
          // Email
          case REGEX.EMAIL.test(accountValue):
            return true

          // Phone
          case REGEX.PHONE.test(accountValue):
            return true

          default:
            return 'Credential not allowed'
        }
      },
    },
  },
  PASSWORD: {
    label: 'password',
    title: '',
    placeholder: 'Password',
    rules: {
      required: true,
      minLength: 6,
    },
  },
}
export const LOGIN_FORM_DEFAULT_VALUES: TLoginForm = {
  account: '',
  password: '',
}

type TResetPasswordFormFields = TTransformFields<TResetPassword, { placeholder?: string }>
export const RESET_PASSWORD_FORM: TResetPasswordFormFields = {
  PASSWORD: {
    label: 'password',
    title: '',
    placeholder: 'Password',
    rules: {
      required: true,
      minLength: 6,
    },
  },
  CONFIRM_PASSWORD: {
    label: 'confirmPassword',
    title: '',
    placeholder: 'Confirm Password',
    rules: {
      required: true,
    },
  },
}
export const RESET_PASSWORD_FORM_DEFAULT_VALUES: TResetPassword = {
  password: '',
  confirmPassword: '',
}

type TRegisterFormFields = TTransformFields<
  TRegisterForm,
  { placeholder?: string; startIcon: ReactNode | ((color: string) => ReactNode) }
>
export const REGISTER_FORM: TRegisterFormFields = {
  NAME: {
    label: 'name',
    title: '',
    placeholder: 'Name',
    rules: {
      required: true,
      maxLength: 40,
    },
    startIcon: (color) => <User fill={color} />,
  },
  ACCOUNT: {
    label: 'account',
    title: '',
    placeholder: 'Your Email / Phone Number',
    rules: {
      required: true,
      /*
       * Expect to meet one of the validate criteria
       * Either `email` or `phone`
       */
      validate: (accountValue: string) => {
        switch (true) {
          // Email
          case REGEX.EMAIL.test(accountValue):
            return true

          // Phone
          case REGEX.PHONE.test(accountValue):
            return true

          default:
            return 'Account you just enter is not email or phone number'
        }
      },
    },
    startIcon: (color) => <Mail fill={color} />,
  },
  PASSWORD: {
    label: 'password',
    title: '',
    placeholder: 'Password',
    rules: {
      required: {
        value: true,
        message: 'Password is required. Please enter your security password!',
      },
      minLength: {
        value: 6,
        message: 'Password is too short. Try longer password for more security!',
      },
    },
    startIcon: (color) => <Lock fill={color} />,
  },
  CONFIRM_PASSWORD: {
    label: 'confirmPassword',
    title: '',
    placeholder: 'Confirm Password',
    rules: {
      required: true,
    },
    startIcon: (color) => <Lock fill={color} />,
  },
}
export const REGISTER_FORM_DEFAULT_VALUES: TRegisterForm = {
  account: '',
  name: '',
  password: '',
  confirmPassword: '',
}

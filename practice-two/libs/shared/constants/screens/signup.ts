import { InputProps } from 'libs/shared/components/Input'

import COLORS from '../colors'
import ERROR_MESSAGES from '../errorMessages'

const INPUTS = (observePassword: string): Omit<InputProps, 'control'>[] => [
  {
    name: 'firstName',
    isShowError: true,
    placeholder: 'First Name',
    placeholderTextColor: COLORS.WHITE,
    rules: {
      required: ERROR_MESSAGES.FIRST_NAME.REQUIRED,
    },
  },
  {
    name: 'lastName',
    isShowError: true,
    placeholder: 'Last Name',
    placeholderTextColor: COLORS.WHITE,
    rules: {
      required: ERROR_MESSAGES.LAST_NAME.REQUIRED,
    },
  },
  {
    name: 'email',
    isShowError: true,
    placeholder: 'Email/Mobile Number',
    placeholderTextColor: COLORS.WHITE,
    rules: {
      required: ERROR_MESSAGES.ACCOUNT.REQUIRED,
    },
  },
  {
    name: 'password',
    secureTextEntry: true,
    isShowError: true,
    placeholder: 'Password',
    placeholderTextColor: COLORS.WHITE,
    rules: {
      required: ERROR_MESSAGES.PASSWORD.REQUIRED,
      minLength: {
        value: 6,
        message: ERROR_MESSAGES.PASSWORD.MIN_LENGTH,
      },
    },
  },
  {
    name: 'confirmPassword',
    secureTextEntry: true,
    isShowError: true,
    placeholder: 'Re-enter password',
    placeholderTextColor: COLORS.WHITE,
    rules: {
      required: ERROR_MESSAGES.CONFIRM_PASS.REQUIRED,
      validate: (value: string) => value === observePassword || ERROR_MESSAGES.CONFIRM_PASS.MATCH,
    },
  },
]

export default INPUTS

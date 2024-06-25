import { UseControllerProps } from 'react-hook-form'

import { TFormValues } from '@shared/types'

import REGEX from './regex'

type TValidationRules = {
  [key in Uppercase<keyof TFormValues>]: UseControllerProps['rules']
}

const VALIDATION_RULES: TValidationRules = {
  ACCOUNT: {
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
  PASSWORD: {
    required: true,
    minLength: 6,
  },
  CONFIRMPASSWORD: {
    required: true,
  },
  EMAIL: {},
  NAME: {
    required: true,
    maxLength: 40,
  },
  PHONE: {},
}

export default VALIDATION_RULES

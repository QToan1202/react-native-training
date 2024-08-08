import { UseControllerProps } from 'react-hook-form'

import { TDelimiterCase } from '@shared/utils'

import { TAddressForm } from '../types'

export const STEPPER_LABELS = ['Cart', 'Address', 'Payment', 'Summary']

export const STALE_TIMES = {
  ADDRESS: 24 * 60 * 60 * 1000, // 1 day
}

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'China',
  'India',
  'Brazil',
]

type TAddressFormConstant = {
  [K in keyof TAddressForm as Uppercase<TDelimiterCase<K, '_'>>]: {
    label: keyof TAddressForm
    title: string
    rules?: UseControllerProps['rules']
  }
}

export const ADDRESS_FORM: TAddressFormConstant = {
  COUNTRY: {
    label: 'country',
    title: 'Country',
    rules: {
      required: {
        value: true,
        message: 'Country field is require. Please select value!',
      },
    },
  },
  FIRST_NAME: {
    label: 'firstName',
    title: 'First Name',
    rules: {
      required: {
        value: true,
        message: 'First name field is require. Please enter any value!',
      },
      maxLength: {
        value: 30,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  LAST_NAME: {
    label: 'lastName',
    title: 'Last Name',
    rules: {
      required: {
        value: true,
        message: 'Last name field is require. Please enter any value!',
      },
      maxLength: {
        value: 30,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  ADDRESS: {
    label: 'address',
    title: 'Street Address',
    rules: {
      required: {
        value: true,
        message: 'Address field is require. Please enter any value!',
      },
      maxLength: {
        value: 50,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  OPTIONAL_ADDRESS: {
    label: 'optionalAddress',
    title: 'Street Address 2 (Optional)',
  },
  CITY: {
    label: 'city',
    title: 'City',
    rules: {
      required: {
        value: true,
        message: 'City field is require. Please enter any value!',
      },
      maxLength: {
        value: 20,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  STATE: {
    label: 'state',
    title: 'State/Province/Region',
    rules: {
      required: {
        value: true,
        message: 'State/Province/Region field is require. Please enter any value!',
      },
      maxLength: {
        value: 20,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  ZIP_CODE: {
    label: 'zipCode',
    title: 'Zip Code',
    rules: {
      required: {
        value: true,
        message: 'Zip Code field is require. Please enter any value!',
      },
      pattern: {
        value: /^\d+$/,
        message: 'Zip Code must have only number.',
      },
      maxLength: {
        value: 6,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
  PHONE: {
    label: 'phone',
    title: 'Phone Number',
    rules: {
      required: {
        value: true,
        message: 'Phone field is require. Please enter any value!',
      },
      pattern: {
        value: /^\d+$/,
        message: 'Phone must have only have number. Please re-check your phone!',
      },
      maxLength: {
        value: 15,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
}

export const DEFAULT_ADDRESS_VALUES: TAddressForm = {
  country: '',
  firstName: '',
  lastName: '',
  address: '',
  optionalAddress: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
}

export type TPaymentMethod = {

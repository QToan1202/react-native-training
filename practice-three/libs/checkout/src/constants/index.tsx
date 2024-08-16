import { ReactNode } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { TTransformFields } from '@shared/utils'

import { Bank, Cash, GooglePay, Paypal } from '../assets/images'
import { TAddressForm, TCardForm } from '../types'
import { checkCreditCardNumber } from '../utils'

dayjs.extend(customParseFormat)

export const STEPPER_LABELS = ['Cart', 'Address', 'Payment', 'Summary']

export const STALE_TIMES = {
  ADDRESS: 24 * 60 * 60 * 1000, // 1 day
  CARD: 24 * 60 * 60 * 1000, // 1 day
  PRODUCT_INFO: 24 * 60 * 60 * 1000, // 1 day
  ORDER: 30 * 60 * 1000, // 30 mins
  CART: 3 * 60 * 1000, // 3 mins
}

export const FEES = {
  SHIP: 40,
  IMPORT: 128,
}

export const EXPECTED_DELIVERY_TIME = 3

export const REGEX = {
  CARD_NUMBER: {
    INPUT: /(\d{4})(?=\d)/g,
    OUTPUT: /\s/g,
  },
  EXPIRED: {
    INPUT: /(\d{2})(\d{2})/,
    OUTPUT: /\//g,
  },
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

type TAddressFields = TTransformFields<TAddressForm>
export const ADDRESS_FORM: TAddressFields = {
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
  icon: ReactNode
  label: string
}
export const PAYMENT_METHODS: TPaymentMethod[] = [
  // {
  //   icon: <Debit />,
  //   label: 'Debit or Credit Card',
  // },
  {
    icon: <Paypal />,
    label: 'Paypal',
  },
  {
    icon: <Bank />,
    label: 'Bank Transfer',
  },
  {
    icon: <Cash />,
    label: 'Cash on Delivery',
  },
  {
    icon: <GooglePay />,
    label: 'Google Pay',
  },
]

type TCardFields = TTransformFields<TCardForm, { placeholder?: string }>
export const CARD_FORM: TCardFields = {
  CARD_NUMBER: {
    label: 'cardNumber',
    title: 'Card Number',
    placeholder: 'Enter Card Number',
    rules: {
      required: {
        value: true,
        message: 'Card number is require. Please enter any value!',
      },
      pattern: {
        value: /^\d{16}$/,
        message: 'Card number is invalid. Please try another Card number!',
      },
      validate: (value) =>
        checkCreditCardNumber(
          value,
          'Card number is not MasterCard or Visa. Please try another Card number!'
        ),
    },
  },
  EXPIRED: {
    label: 'expired',
    title: 'Expiration Date',
    placeholder: 'Expiration Date',
    rules: {
      required: {
        value: true,
        message: 'Expiration date is require. Please enter any value!',
      },
      pattern: {
        value: /^\d{4}$/,
        message: 'Invalid expired date. Please try again!',
      },
      validate: (value: string) => {
        const expiredDate = value.replace(REGEX.EXPIRED.INPUT, '$1/$2')
        const isStale = dayjs().isAfter(dayjs(expiredDate, 'MM/YY'))

        return !isStale || 'Your card have expired. Please try another card!'
      },
    },
  },
  SECURITY_CODE: {
    label: 'securityCode',
    title: 'Security Code',
    placeholder: 'Security Code',
    rules: {
      required: {
        value: true,
        message: 'Security code is require. Please enter any value!',
      },
      pattern: {
        value: /^\d{3}$/,
        message: 'CVC is invalid. Please try again!',
      },
    },
  },
  CARD_HOLDER: {
    label: 'cardHolder',
    title: 'Card Holder',
    placeholder: 'Enter Card Holder Name',
    rules: {
      required: {
        value: true,
        message: 'Card holder field is require. Please enter any value!',
      },
      maxLength: {
        value: 30,
        message: 'Your value you just entered is too long, maybe try shorter value!',
      },
    },
  },
}

export const DEFAULT_CARD_VALUES: TCardForm = {
  cardHolder: '',
  cardNumber: '',
  expired: '',
  securityCode: '',
}

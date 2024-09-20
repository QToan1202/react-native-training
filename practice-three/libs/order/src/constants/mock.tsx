import { ReactNode } from 'react'

import { Bank, Cash, GooglePay, Paypal } from '../assets/images'

export const STEPPER_LABELS = ['Cart', 'Address', 'Payment', 'Summary']

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

import { Children, isValidElement, ReactElement, ReactNode } from 'react'
import { UseControllerProps } from 'react-hook-form'

import { TDelimiterCase } from '@shared/utils'

export const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[]

export const getStepIndex = (data: string[], label: string) =>
  data.findIndex((value: string) => !value.localeCompare(label, 'en', { sensitivity: 'base' }))

export type TTransformFields<
  T extends Record<string, string>,
  ExtraProps = NonNullable<unknown>
> = {
  [K in keyof T as Uppercase<TDelimiterCase<K & string, '_'> & string>]: {
    label: keyof T
    title: string
    rules?: UseControllerProps['rules']
  } & ExtraProps
}

export const checkCreditCardNumber = (cardNumber: string, errorMessages: string) => {
  switch (cardNumber.charAt(0)) {
    case '2': // Mastercard
      return

    case '5': // Mastercard
      return

    case '4': // Visa
      return

    default:
      return errorMessages
  }
}

export const isMasterCard = (cardNumber: string) =>
  cardNumber.charAt(0) === '2' || cardNumber.charAt(0) === '5'
export const isVisa = (cardNumber: string) => cardNumber.charAt(0) === '4'

import { Children, isValidElement, ReactElement, ReactNode } from 'react'

export const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[]

export const getStepIndex = (data: string[], label: string) =>
  data.findIndex((value: string) => !value.localeCompare(label, 'en', { sensitivity: 'base' }))

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

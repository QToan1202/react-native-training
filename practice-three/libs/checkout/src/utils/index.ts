import { Children, isValidElement, ReactElement, ReactNode } from 'react'

import { TCardForm } from '../types'
import { REGEX } from '../constants'

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

export const transformAddCardForm = (
  label: keyof TCardForm,
  value: string,
  onChange: (...event: any[]) => void
) => {
  switch (label) {
    case 'cardNumber':
      return {
        input: value.replace(REGEX.CARD_NUMBER.INPUT, '$1 '),
        output: (text: string) => onChange(text.replace(REGEX.CARD_NUMBER.OUTPUT, '')),
      }

    case 'expired':
      return {
        input: value.replace(REGEX.EXPIRED.INPUT, '$1/$2'),
        output: (text: string) => onChange(text.replace(REGEX.EXPIRED.OUTPUT, '')),
      }

    default:
      return {
        input: value,
        output: onChange,
      }
  }
}

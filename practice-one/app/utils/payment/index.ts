import { TCard } from '@types'

const checkCardType = (cardNumber: string): TCard => {
  const firstDigit: number = Number(cardNumber[0])

  switch (firstDigit) {
    case 4:
      return 'visa'
    case 5:
      return 'mastercard'
    default:
      return 'normal'
  }
}

export default checkCardType

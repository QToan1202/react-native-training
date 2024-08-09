export type TAddress = {
  id: string
  userId: string
  firstName: string
  lastName: string
  address: string
  optionalAddress: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
}

type TItem = {
  quantity: number
  price: number
}

export type TOrder = {
  id: string
  userId: string
  addressId: string
  items: Record<string, TItem>
  date: string
}

type TRemovePropAddress = 'id' | 'userId'
export type TAddressForm = Omit<TAddress, TRemovePropAddress>

export type TCard = {
  id: string
  userId: string
  cardNumber: string
  expired: string
  securityCode: string
  cardHolder: string
}

type TRemoveCardProp = 'id' | 'userId'
export type TCardForm = Omit<TCard, TRemoveCardProp>

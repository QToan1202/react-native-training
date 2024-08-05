export type TAddress = {
  id: string
  userId: string
  name: string
  address: string
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

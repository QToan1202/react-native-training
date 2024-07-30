import { TProduct } from '../product'
import { TUser } from '../user'

export type TCart = {
  id: string
  userId: TUser['id']
  items: Record<TProduct['id'], number>
}

export type TCartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

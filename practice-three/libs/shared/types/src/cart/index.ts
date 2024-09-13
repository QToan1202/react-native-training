import { TProduct } from '../product'
import { TUser } from '../user'

export type TCartItemProps = {
  quantity: number
  color: string
  size: string
}

export type TCart = {
  id: string
  userId: TUser['id']
  items: Record<TProduct['id'], TCartItemProps>
}

export type TCartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  color: string
  size: string
}

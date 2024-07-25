import { TProduct } from '../product'
import { TUser } from '../user'

export type TCart = {
  id: string
  userId: TUser['id']
  productId: Array<TProduct['id']>
  quantity: number[]
}

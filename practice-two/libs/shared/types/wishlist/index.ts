import { IProductBase } from '../products'
import { IUser } from '../users'

export interface IWishlistBase {
  id: number
  productId: number
  userId: number
}

export interface IWishlist extends IWishlistBase {
  product: IProductBase
  user: IUser
}

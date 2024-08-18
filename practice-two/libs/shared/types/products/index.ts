import { IUser } from '../users'
import { ICategory } from '../categories'
import { IStore } from '../stores'

export interface IProductBase {
  id: number
  storeId: number
  categoryId: number
  name: string
  price: number
  discountPrice: number
  description: string
  condition: string
  priceType: string
  location: string
  delivery: string
  img: string
}

export interface ICart extends IProductBase {
  quantity: number
}

export interface IProduct extends IProductBase {
  store: IStore
  category: ICategory
}

export interface IOrderStatus {
  id: number
  status: string
}

export interface IOrder {
  id: number
  productId: Array<ICart['id']>
  quantity: Array<ICart['quantity']>
  orderStateId: IOrderStatus['id']
  userId: IUser['id']
}

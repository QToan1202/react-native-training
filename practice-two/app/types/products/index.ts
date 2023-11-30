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

export interface IProduct extends IProductBase {
  store: IStore
  category: ICategory
}

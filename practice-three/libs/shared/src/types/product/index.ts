import { TUser } from '../user'

export type TProduct = {
  id: string
  name: string
  image: string
  price: number
  discountPercent: number
  brandName: string
  rating: number
  description: string
  sellerName: string
  sizes: string[]
  reviews: TReview[]
  specifications: TProductSpecification
}

export type TProductSpecification = {
  type: string
  color: string
  sleeveLength: string
  patternType: string
  length: string
  closure: string
  liningFabric: string
  numOfPockets: number
  hemline: string
  occasion: string
}

export type TReview = {
  rating: number
  content: string
  reviewer: string
  date: Date | string
}

export type TWishlistBase = {
  productId: TProduct['id']
  userId: TUser['id']
  id: string
}

export type TWishlistExpand = TWishlistBase & {
  product: TProduct
  user: TUser
}

export type TWishlist = TWishlistBase | TWishlistExpand

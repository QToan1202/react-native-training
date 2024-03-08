import { IFlatListBase } from '@practice-two/shared/types'
import { ProductCardProps } from 'libs/shared/components/ProductCard'

export type IProductItem = IFlatListBase & Omit<ProductCardProps, 'onPress'>

const PRODUCT_DATA: IProductItem[] = [
  {
    id: '1',
    img: require('@assets/product/coca.png'),
    title: 'coca cola',
    avatar: require('@assets/avatar.png'),
    storeName: 'tradly',
    price: 222.6,
  },
  {
    id: '2',
    img: require('@assets/product/coca.png'),
    title: 'coca cola',
    avatar: require('@assets/avatar.png'),
    storeName: 'tradly',
    price: 222.6,
  },
  {
    id: '3',
    img: require('@assets/product/coca.png'),
    title: 'coca cola',
    avatar: require('@assets/avatar.png'),
    storeName: 'tradly',
    price: 222.6,
    discountPrice: 12,
  },
]

export default PRODUCT_DATA

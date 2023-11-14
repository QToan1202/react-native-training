import { IFlatListBase } from '@types'

import { SliderItemProps } from '@components/SliderItem'
import { MenuCardProps } from '@components/MenuCard'
import { ProductCardProps } from '@components/ProductCard'
import { StoreCardProps } from '@components/StoreCard'

export interface ISliderItem extends IFlatListBase, Omit<SliderItemProps, 'id' | 'onPress'> {}

const SLIDER_DATA: ISliderItem[] = [
  {
    id: '1',
    title: 'Ready to deliver to your home',
    btnTitle: 'Start Shopping',
    source: require('@assets/slider/deliver.png'),
  },
  {
    id: '2',
    title: 'Ready to deliver to your home',
    btnTitle: 'Start Shopping',
    source: require('@assets/slider/deliver.png'),
  },
]

export interface ICategoryItem
  extends IFlatListBase,
    Omit<MenuCardProps, 'name' | 'id' | 'onPress'> {
  name: string
}

const CATEGORY_DATA: ICategoryItem[] = [
  {
    id: '1',
    source: require('@assets/menu/beverages.png'),
    name: 'beverages',
  },
  {
    id: '2',
    source: require('@assets/menu/bread.png'),
    name: 'bread & bakery',
  },
  {
    id: '3',
    source: require('@assets/menu/vegetables.png'),
    name: 'vegetables',
  },
  {
    id: '4',
    source: require('@assets/menu/fruit.png'),
    name: 'fruit',
  },
  {
    id: '5',
    source: require('@assets/menu/egg.png'),
    name: 'egg',
  },
  {
    id: '6',
    source: require('@assets/menu/frozen.png'),
    name: 'frozen veg',
  },
  {
    id: '7',
    source: require('@assets/menu/homecare.png'),
    name: 'homecare',
  },
  {
    id: '8',
    source: require('@assets/menu/pet.png'),
    name: 'pet care',
  },
]

export interface IProductItem extends IFlatListBase, Omit<ProductCardProps, 'id' | 'onPress'> {}

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

export interface IStoreItem extends IFlatListBase, Omit<StoreCardProps, 'id' | 'onPressBtn'> {
  name: string
}

const STORE_DATA: IStoreItem[] = [
  {
    id: '1',
    image: require('@assets/store/tradly.png'),
    source: require('@assets/avatar.png'),
    name: 'tradly store',
    btnTitle: 'follow',
  },
  {
    id: '2',
    image: require('@assets/store/tradly.png'),
    source: require('@assets/avatar.png'),
    name: 'tradly store',
    btnTitle: 'follow',
  },
  {
    id: '3',
    image: require('@assets/store/tradly.png'),
    source: require('@assets/avatar.png'),
    name: 'tradly store',
    btnTitle: 'follow',
  },
  {
    id: '4',
    image: require('@assets/store/tradly.png'),
    source: require('@assets/avatar.png'),
    name: 'tradly store',
    btnTitle: 'follow',
  },
]

export default { SLIDER_DATA, CATEGORY_DATA, PRODUCT_DATA, STORE_DATA }

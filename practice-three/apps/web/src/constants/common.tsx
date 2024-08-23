import {
  Delivery,
  Discount,
  Facebook,
  Flag,
  Headphone,
  Instagram,
  ShippingBox,
  Twitter,
  Whatsapp,
} from '../assets/images'

export type TNavItem = {
  title: string
  link: string
}
export const NAV_ITEMS: TNavItem[] = [
  {
    title: 'Men',
    link: '#',
  },
  {
    title: 'Women',
    link: '#',
  },
  {
    title: 'Kids',
    link: '#',
  },
  {
    title: 'Shop',
    link: '#',
  },
  {
    title: 'Contact us',
    link: '#',
  },
]

export type TCategoryItem = {
  title: string
  subCategory: string[]
}
export const FOOTER_CATEGORIES: TCategoryItem[] = [
  {
    title: 'Women',
    subCategory: ['All Women', 'Skirts', 'T- Shirts', 'Tops', 'Jackets'],
  },
  {
    title: 'Men',
    subCategory: ['All Men', 'Skirts', 'T- Shirts', 'Shorts', 'Jackets'],
  },
  {
    title: 'Kids',
    subCategory: ['All Kids', 'Skirts', 'T- Shirts', 'Shorts', 'Jackets'],
  },
  {
    title: 'Shopping',
    subCategory: ['Your cart', 'Your orders', 'Compared items', 'Wishlist', 'Shipping Details'],
  },
  {
    title: 'More links',
    subCategory: ['Blogs', 'Gift center', 'Buying guides', 'New arrivals', 'Clearance'],
  },
]

export const SOCIAL_MEDIA_CONTACTS = [Facebook, Instagram, Whatsapp, Twitter]

export const QUALITY_CARDS_DATA = [
  {
    icon: <Flag />,
    title: 'Locally Owned',
    description: 'We have local business and sell best quality clothes',
  },
  {
    icon: <Delivery />,
    title: 'Fast Delivery',
    description: 'We provide fast delivery to our customers',
  },
  {
    icon: <ShippingBox />,
    title: 'Easy Return',
    description: 'We provide easy return policy. ',
  },
  {
    icon: <Headphone />,
    title: 'Online Support',
    description: 'We give 24/7 online support',
  },
  {
    icon: <Discount />,
    title: 'Best Offers',
    description: 'We give best offers to our customers',
  },
]

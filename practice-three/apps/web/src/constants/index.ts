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

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
  leviLogo,
  jacketDeal,
  sweaterDeal,
  dressDeal,
  reviewerAvatar,
  rackBlog,
  clothesBlog,
  jacketOffer,
  leviOffer,
  foreverOffer,
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

export const DEAL_ITEMS_DATA = [
  {
    image: jacketDeal,
    brandImage: leviLogo,
    title: 'Best of Styles',
    description: 'Under Rs.799',
  },
  {
    image: sweaterDeal,
    brandImage: leviLogo,
    title: 'Best of Styles',
    description: 'Under Rs.799',
  },
  {
    image: dressDeal,
    brandImage: leviLogo,
    title: 'Best of Styles',
    description: 'Under Rs.799',
  },
  {
    image: jacketDeal,
    brandImage: leviLogo,
    title: 'Best of Styles',
    description: 'Under Rs.799',
  },
]

export const REVIEW_ITEMS_DATA = [
  {
    image: reviewerAvatar,
    rating: 4.4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper',
  },
  {
    image: reviewerAvatar,
    rating: 4.4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper',
  },
  {
    image: reviewerAvatar,
    rating: 4.4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper',
  },
]

export const BLOG_ITEMS_DATA = [
  {
    title: 'Discover new way to decorate your home .',
    content: 'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'By Souha . H',
    image: rackBlog,
  },
  {
    title: 'Discover new way to decorate your home .',
    content: 'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'By Souha . H',
    image: clothesBlog,
  },
  {
    title: 'Discover new way to decorate your home .',
    content: 'Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut ...',
    author: 'By Souha . H',
    image: rackBlog,
  },
]

export const OFFER_ITEMS_DATA = [
  {
    title: 'Min 50% off',
    image: jacketOffer,
    brandImage: foreverOffer,
    size: 'sm',
  },
  {
    title: 'Min 60% off',
    image: leviOffer,
    brandImage: leviLogo,
    size: 'normal',
  },
  {
    title: 'Min 50% off',
    image: jacketOffer,
    brandImage: foreverOffer,
    size: 'sm',
  },
] as const

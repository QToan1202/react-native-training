import { Bag, Bell, Card, Heart, HelpCircle, Info, MapPin, Ticket } from '../assets/images'
import { ProfileItemProps } from '../components'

export const STALE_TIMES = {
  USER_INFO: 24 * 60 * 60 * 1000, // 1 day
}

export type TProfileItems = Pick<ProfileItemProps, 'icon' | 'title'>
export const PROFILE_ITEMS: TProfileItems[] = [
  {
    icon: <Bag />,
    title: 'My Orders',
  },
  {
    icon: <Heart />,
    title: 'Wishlist',
  },
  {
    icon: <MapPin />,
    title: 'Delivery Address',
  },
  {
    icon: <Card />,
    title: 'Payment Methods',
  },
  {
    icon: <Ticket />,
    title: 'Offers',
  },
  {
    icon: <Bell />,
    title: 'Notifications',
  },
  {
    icon: <HelpCircle />,
    title: 'Help',
  },
  {
    icon: <Info />,
    title: 'About ',
  },
]

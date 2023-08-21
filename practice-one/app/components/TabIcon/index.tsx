import { Image, ImageStyle } from 'react-native'

import { imageStyles } from '@styles'

export interface IconProps {
  color: string
}

const setIconColor = (color: string): ImageStyle => ({ tintColor: color })

const Home = ({ color }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/home.png')}
      style={[imageStyles.icon, setIconColor(color)]}
    />
  )
}

const Order = ({ color }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/order.png')}
      style={[imageStyles.icon, setIconColor(color)]}
    />
  )
}

const Profile = ({ color }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/profile.png')}
      style={[imageStyles.icon, setIconColor(color)]}
    />
  )
}

const Search = ({ color }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/search.png')}
      style={[imageStyles.icon, setIconColor(color)]}
    />
  )
}

const Store = ({ color }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/store.png')}
      style={[imageStyles.icon, setIconColor(color)]}
    />
  )
}

const TabIcon = {
  Home,
  Order,
  Profile,
  Search,
  Store,
}

export default TabIcon

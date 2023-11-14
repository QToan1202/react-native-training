import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native'

import { imageStyles } from '@styles'

export interface IconProps extends Omit<ImageProps, 'source'> {
  color: string
  style?: StyleProp<ImageStyle>
}

const setIconColor = (color: string): ImageStyle => ({ tintColor: color })

const Home = ({ color, style, ...rest }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/home.png')}
      style={[imageStyles.icon, setIconColor(color), style]}
      {...rest}
    />
  )
}

const Order = ({ color, style, ...rest }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/order.png')}
      style={[imageStyles.icon, setIconColor(color), style]}
      {...rest}
    />
  )
}

const Profile = ({ color, style, ...rest }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/profile.png')}
      style={[imageStyles.icon, setIconColor(color), style]}
      {...rest}
    />
  )
}

const Search = ({ color, style, ...rest }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/search.png')}
      style={[imageStyles.icon, setIconColor(color), style]}
      {...rest}
    />
  )
}

const Store = ({ color, style, ...rest }: IconProps) => {
  return (
    <Image
      source={require('@assets/tab/store.png')}
      style={[imageStyles.icon, setIconColor(color), style]}
      {...rest}
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

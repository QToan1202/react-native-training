import { SvgProps } from 'react-native-svg'

import HomeIcon from '@assets/tab/home.svg'
import OrderIcon from '@assets/tab/order.svg'
import ProfileIcon from '@assets/tab/profile.svg'
import SearchIcon from '@assets/tab/search.svg'
import StoreIcon from '@assets/tab/store.svg'

import { imageStyles } from '@styles'

export interface IconProps extends SvgProps {
  color: string
}

const setIconColor = (color: string): SvgProps => ({ fill: color })

const Home = ({ color, style, ...rest }: IconProps) => {
  return <HomeIcon style={[imageStyles.icon, style]} {...setIconColor(color)} {...rest} />
}

const Order = ({ color, style, ...rest }: IconProps) => {
  return <OrderIcon style={[imageStyles.icon, style]} {...setIconColor(color)} {...rest} />
}

const Profile = ({ color, style, ...rest }: IconProps) => {
  return <ProfileIcon style={[imageStyles.icon, style]} {...setIconColor(color)} {...rest} />
}

const Search = ({ color, style, ...rest }: IconProps) => {
  return <SearchIcon style={[imageStyles.icon, style]} {...setIconColor(color)} {...rest} />
}

const Store = ({ color, style, ...rest }: IconProps) => {
  return <StoreIcon style={[imageStyles.icon, style]} {...setIconColor(color)} {...rest} />
}

const TabIcon = {
  Home,
  Order,
  Profile,
  Search,
  Store,
}

export default TabIcon

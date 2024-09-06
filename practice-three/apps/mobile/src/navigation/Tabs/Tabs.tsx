import { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BottomTabParamsList } from '@practice-three/types'
import { Bag, Heart, Home, Search, User } from '../../assets/images'
import { getTokenValue } from 'tamagui'

const Tab = createBottomTabNavigator<BottomTabParamsList>()

type BottomNavProps = {
  children: ReactNode
}

const renderTabIcon = (route: keyof BottomTabParamsList, color: string): React.JSX.Element => {
  switch (route) {
    case 'HomeTab':
      return <Home fill={color} />
    case 'ProductTab':
      return <Search fill={color} />
    case 'WishlistTab':
      return <Heart stroke={color} />
    case 'CartTab':
      return <Bag fill={color} />
    case 'ProfileTab':
      return <User fill={color} />
    default:
      return null
  }
}

const BottomNav = ({ children }: BottomNavProps) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        lazy: true,
        headerShown: false,
        tabBarIcon: ({ color }) => renderTabIcon(route.name, color),
        tabBarActiveTintColor: getTokenValue('$color.primary'),
        tabBarInactiveTintColor: getTokenValue('$color.gray_100'),
        tabBarShowLabel: false,
      })}
    >
      {children}
    </Tab.Navigator>
  )
}

export default BottomNav

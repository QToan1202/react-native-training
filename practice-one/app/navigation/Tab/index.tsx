import { View } from 'react-native'
import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Bar, TabIcon } from '@components'
import { COLORS } from '@constants'
import styles from './styles'

export type TabParamsList = {
  Home: undefined
  Browse: undefined
  Product: undefined
  ['Order History']: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<TabParamsList>()

const Fragment = () => <View />

const renderTabIcon = (
  route: keyof TabParamsList,
  navigation: NavigationProp<TabParamsList>,
  color: string
): React.JSX.Element => {
  switch (route) {
    case 'Home':
      return <TabIcon.Home color={color} />
    case 'Browse':
      return <TabIcon.Search color={color} />
    case 'Product':
      return <TabIcon.Store color={color} />
    case 'Order History':
      return <TabIcon.Order color={color} />
    case 'Profile':
      return <TabIcon.Profile color={color} />
    default:
      return Fragment()
  }
}

const Header = (title: string) => <Bar title={title} />

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          header: () => Header(route.name),
          tabBarIcon: ({ color }) => renderTabIcon(route.name, navigation, color),
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.GRAY_50,
          tabBarLabelStyle: styles.label,
          tabBarStyle: styles.tab,
          tabBarItemStyle: styles.items,
        })}
      >
        <Tab.Screen name="Home" component={Fragment} />
        <Tab.Screen name="Browse" component={Fragment} />
        <Tab.Screen name="Product" component={Fragment} />
        <Tab.Screen name="Order History" component={Fragment} />
        <Tab.Screen name="Profile" component={Fragment} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNav

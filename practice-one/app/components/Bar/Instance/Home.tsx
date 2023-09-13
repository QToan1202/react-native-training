import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { BAR } from '@constants'
import Search from '@components/Search'

import Bar from '../index'

const HomeBar = ({ options, route }: BottomTabHeaderProps) => {
  return (
    <Bar
      title={String(options.headerTitle) || route.name}
      iconList={BAR.HOME}
      align="space-between"
      iconNoBg
    >
      <Search placeholder="Search Product" />
    </Bar>
  )
}

export default HomeBar

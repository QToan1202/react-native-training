import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { BAR } from '@constants'
import Search from '@components/Search'
import Bar from '@components/Bar'

const HomeBar = ({ options, route }: BottomTabHeaderProps) => {
  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      iconList={BAR.HOME}
      align="space-between"
      iconNoBg
    >
      <Search placeholder="Search Product" />
    </Bar>
  )
}

export default HomeBar

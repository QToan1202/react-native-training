import { useCallback, useMemo } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Search from '@components/Search'
import Bar from '@components/Bar'
import { IIconList } from '@types'
import IconButton from '@components/IconButton'
import { BAR } from '@constants'

const HomeBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToCart = useCallback(() => navigation.navigate('Cart'), [])
  const IconList = useMemo(
    () =>
      BAR.HOME.map(({ label, ...rest }: IIconList) => (
        <IconButton
          key={label}
          onPress={label === 'cart' ? handleNavigateToCart : undefined}
          {...rest}
        />
      )),
    [handleNavigateToCart]
  )

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      IconList={IconList}
      align="space-between"
    >
      <Search placeholder="Search Product" />
    </Bar>
  )
}

export default HomeBar

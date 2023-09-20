import { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { BAR } from '@constants'
import Button, { ButtonProps } from '@components/Button'
import Search from '@components/Search'
import IconButton from '@components/IconButton'

import { containerStyles } from '@styles'
import Bar from '@components/Bar'
import { IIconList } from '@types'

import styles from './styles'

const BrowseBar = ({ options, route }: BottomTabHeaderProps) => {
  const handlePress = () => {
    throw new Error('Function not implemented.')
  }
  const renderButton = useCallback(
    ({ title, leftIcon, onPress }: ButtonProps) => (
      <Button
        title={title}
        variant="tertiary"
        shrink
        style={styles.btn}
        leftIcon={leftIcon}
        onPress={onPress}
      />
    ),
    []
  )
  const IconList = useMemo(
    () => BAR.HOME.map(({ label, ...rest }: IIconList) => <IconButton key={label} {...rest} />),
    []
  )

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      IconList={IconList}
      align="space-between"
    >
      <View style={styles.content}>
        <Search placeholder="Search Product" />
        <View style={containerStyles.inline}>
          {renderButton({
            title: 'sort by',
            leftIcon: require('@assets/sort.png'),
            onPress: handlePress,
          })}
          {renderButton({
            title: 'location',
            leftIcon: require('@assets/maps.png'),
            onPress: handlePress,
          })}
          {renderButton({
            title: 'category',
            leftIcon: require('@assets/category.png'),
            onPress: handlePress,
          })}
        </View>
      </View>
    </Bar>
  )
}

export default BrowseBar

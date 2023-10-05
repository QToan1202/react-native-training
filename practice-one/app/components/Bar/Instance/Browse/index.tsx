import { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { BAR } from '@constants'
import Button, { ButtonProps } from '@components/Button'
import Search from '@components/Search'
import IconButton from '@components/IconButton'

import { containerStyles } from '@styles'
import Bar from '@components/Bar'
import { IIconList } from '@types'

import styles from './styles'

const BrowseBar = ({ navigation, options, route }: NativeStackHeaderProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToCart = useCallback(() => navigation.navigate('Cart'), [])
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

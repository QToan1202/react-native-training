import { useCallback } from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import Button, { ButtonProps } from '@components/Button'
import Bar from '@components/Bar'
import { containerStyles } from '@styles'

const CategoryBar = ({ options, route, navigation }: BottomTabHeaderProps) => {
  const handlePress = () => {
    throw new Error('Function not implemented.')
  }
  const renderButton = useCallback(
    ({ title, leftIcon, onPress }: ButtonProps) => (
      <Button
        title={title}
        variant="tertiary"
        shrink
        leftIcon={leftIcon}
        onPress={onPress}
        style={containerStyles.expand}
      />
    ),
    []
  )
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation])

  return (
    <Bar
      title={options.headerTitle?.toString() || route.name}
      showBackBtn
      align="center"
      onPressBack={handleGoBack}
    >
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
    </Bar>
  )
}

export default CategoryBar

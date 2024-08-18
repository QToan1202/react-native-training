import { memo, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import Button, { ButtonProps } from '../../../Button'
import { containerStyles } from '../../../../styles'
import Bar from '../../index'

const CategoryBar = ({ options, route, navigation }: NativeStackHeaderProps) => {
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

export default memo(CategoryBar)

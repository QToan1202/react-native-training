import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Args, ReactNativeFramework } from '@storybook/react-native'
import { DecoratorFunction } from '@storybook/csf'

const StoryBookStack = createNativeStackNavigator()

export const NavigationDecorator: DecoratorFunction<ReactNativeFramework, Args> = (Story) => {
  const Screen = () => Story()

  return (
    <NavigationContainer independent>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{ header: () => null }}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationDecorator

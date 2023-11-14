import { render, RenderOptions } from '@testing-library/react-native'
import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const AllTheProviders = ({ children }: { children: ReactElement }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  )
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'

export { customRender as render }

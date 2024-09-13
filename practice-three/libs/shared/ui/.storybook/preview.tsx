import { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'

import tamaguiConfig from '../src/tamagui.config'

const preview: Preview = {
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <ToastProvider>
          <Story />
          <ToastViewport unstyled />
        </ToastProvider>
      </TamaguiProvider>
    ),
  ],
}

export default preview

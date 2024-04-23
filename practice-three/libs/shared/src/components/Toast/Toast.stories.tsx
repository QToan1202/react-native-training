import type { Meta, StoryObj } from '@storybook/react'
import { XStack, YStack } from 'tamagui'
import { useToastController } from '@tamagui/toast'

import Toast from './Toast'
import { Button } from '../Button'

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'components/Toast',
}

export default meta

type Story = StoryObj<typeof Toast>
const Controller = () => {
  const toast = useToastController()

  return (
    <XStack gap="$2">
      <Button
        title="Show"
        onPress={() => {
          toast.show('Successfully saved!', {
            message: "Don't worry, we've got your data.",
            duration: 2000,
          })
        }}
      />
      <Button
        title="Hide"
        onPress={() => {
          toast.hide()
        }}
      />
    </XStack>
  )
}

export const Default: Story = {
  render: () => (
    <YStack gap="$2" alignItems="center">
      <Controller />
      <Toast />
    </YStack>
  ),
}

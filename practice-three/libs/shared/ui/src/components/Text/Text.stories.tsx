import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'components/Text',
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: (
      <Text fontSize="$5" col="$red_100">
        my text
      </Text>
    ),
  },
}

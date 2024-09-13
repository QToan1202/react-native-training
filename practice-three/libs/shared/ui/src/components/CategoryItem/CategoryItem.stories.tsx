import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CategoryItem from './CategoryItem'

const meta: Meta<typeof CategoryItem> = {
  component: CategoryItem,
  title: 'components/Category Item',
}

export default meta

type Story = StoryObj<typeof CategoryItem>

export const Default: Story = {
  args: {
    title: 'mens',
    image:
      'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    width: 590,
    height: 330,
    onPress: action('on-click-card'),
  },
}

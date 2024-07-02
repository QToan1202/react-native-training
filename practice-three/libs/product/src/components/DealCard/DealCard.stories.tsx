import type { Meta, StoryObj } from '@storybook/react'

import DealCard from './DealCard'

const meta: Meta<typeof DealCard> = {
  component: DealCard,
  title: 'components/Deal Card',
}

export default meta

type Story = StoryObj<typeof DealCard>

export const Default: Story = {
  args: {
    title: 'Best of Styles',
    description: 'Under Rs.799',
    image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_4776.jpg',
    brandImage: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_2427.jpg',
  },
}

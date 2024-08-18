import type { Meta, StoryObj } from '@storybook/react'

import Carousel from './Carousel'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'components/Carousel',
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    autoplay: false,
    data: [
      'https://picsum.photos/500/300',
      'https://picsum.photos/501/300',
      'https://picsum.photos/502/300',
      'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
      'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
    ],
  },
}

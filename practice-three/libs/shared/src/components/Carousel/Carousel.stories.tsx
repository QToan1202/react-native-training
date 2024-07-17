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
      'https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg',
      'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
      'https://images.dog.ceo/breeds/setter-english/n02100735_4040.jpg',
    ],
  },
}

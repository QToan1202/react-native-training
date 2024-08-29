import type { Meta, StoryObj } from '@storybook/react'

import Carousel from './Carousel'
import { Image } from '../Image'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'components/Carousel',
}

export default meta

type Story = StoryObj<typeof Carousel>

const CarouselAsSwiper = () => (
  <Carousel>
    <Image
      resizeMode="cover"
      source={{
        uri: 'https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg',
        width: 400,
        height: 300,
      }}
    />
    <Image
      resizeMode="cover"
      source={{
        uri: 'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
        width: 400,
        height: 300,
      }}
    />
    <Image
      resizeMode="cover"
      source={{
        uri: 'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
        width: 400,
        height: 300,
      }}
    />
  </Carousel>
)

export const Default: Story = {
  render: () => <CarouselAsSwiper />,
}

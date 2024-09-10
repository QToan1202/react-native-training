import type { Meta, StoryObj } from '@storybook/react'

import Carousel from './Carousel'
import { Image } from '../Image'
import { CarouselRenderItemProps } from './types'

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: 'components/Carousel',
}

export default meta

type Story = StoryObj<typeof Carousel>

const CarouselAsSwiper = () => (
  <Carousel
    data={[
      'https://images.dog.ceo/breeds/gaddi-indian/Gaddi.jpg',
      'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg',
      'https://images.dog.ceo/breeds/husky/n02110185_14479.jpg',
    ]}
    renderItem={({ item }: CarouselRenderItemProps<string>) => (
      <Image
        resizeMode="cover"
        source={{
          uri: item,
          width: 400,
          height: 300,
        }}
      />
    )}
  />
)

export const Default: Story = {
  render: () => <CarouselAsSwiper />,
}

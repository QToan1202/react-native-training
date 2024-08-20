import type { Meta, StoryObj } from '@storybook/react'

import Review from './Review'

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'components/Review',
}

export default meta

type Story = StoryObj<typeof Review>

export const Default: Story = {
  args: {
    image: '',
    rating: 4.4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper',
  },
}

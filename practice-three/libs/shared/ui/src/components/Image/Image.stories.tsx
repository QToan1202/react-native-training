import type { Meta, StoryObj } from '@storybook/react'

import Image from './Image'

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'components/Image',
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: {
    source: {
      width: 300,
      height: 400,
      uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  },
}

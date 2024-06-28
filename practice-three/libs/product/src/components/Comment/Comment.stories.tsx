import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'
import { placeholderImagePath } from '../../assets/images'

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'components/Comment',
}

export default meta

type Story = StoryObj<typeof Comment>

export const Default: Story = {
  args: {
    rating: 4.4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus eget commodo dignissim. Sed aliquet massa urna, a elementum ante pulvinar vitae. Ut ut quam feugiat quam pellentesque euismod. Proin dui lectus, tempor id sagittis at, eleifend eu nulla. Cras mollis egestas metus sed tempor. Nullam vitae interdum ligula, ac convallis velit. Praesent quis tincidunt mauris. Donec lobortis nisl massa, id tincidunt urna molestie in.',
    images: [placeholderImagePath, placeholderImagePath],
    reviewer: 'Reviewer A',
    date: new Date(),
  },
}

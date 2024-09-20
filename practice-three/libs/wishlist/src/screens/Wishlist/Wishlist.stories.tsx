import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import Wishlist, { wishlistLoader as getWishlistLoader } from './Wishlist'
import { queryClient } from '../../../.storybook/preview'

const meta: Meta<typeof Wishlist> = {
  component: Wishlist,
  title: 'screens/Wishlist',
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [
        {
          path: '/wishlist',
          useStoryElement: true,
          loader: getWishlistLoader(queryClient),
        },
      ],
      location: {
        path: '/wishlist',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Wishlist>

export const Default: Story = {
  args: {},
}

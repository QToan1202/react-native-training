import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import ProductDetail, { loader as getProDetailLoader } from './ProductDetail'
import { queryClient } from '../../../.storybook/preview'

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  title: 'screens/Product Detail',
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [
        {
          path: '/product/:id',
          useStoryElement: true,
          loader: getProDetailLoader(queryClient),
        },
      ],
      location: {
        path: '/product/p001',
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof ProductDetail>

export const Default: Story = {
  args: {},
}

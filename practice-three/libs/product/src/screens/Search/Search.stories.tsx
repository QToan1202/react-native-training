import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import Search, { loader as searchLoader } from './Search'
import { queryClient } from '../../../.storybook/preview'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'screens/Search',
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [
        {
          path: '/search',
          useStoryElement: true,
          loader: searchLoader(queryClient),
        },
      ],
      location: {
        path: '/search',
        // searchParams: [
        //   ['specifications.color', 'Blue'],
        //   ['brandName', 'FashionCo'],
        // ],
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}

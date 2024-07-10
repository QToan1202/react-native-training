import type { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters } from 'storybook-addon-remix-react-router'

import Search from './Search'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'screens/Search',
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/search',
        searchParams: [
          ['specifications.color', 'Blue'],
          ['brandName', 'FashionCo'],
        ],
      },
    }),
  },
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}

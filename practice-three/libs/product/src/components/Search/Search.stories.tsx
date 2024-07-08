import type { Meta, StoryObj } from '@storybook/react'
import Search from './Search'
import { useForm } from 'react-hook-form'
import { TSearchField } from '@shared/types'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'components/Search',
}

export default meta

type Story = StoryObj<typeof Search>

const SearchWithHook = () => {
  const { control } = useForm<TSearchField>({
    defaultValues: {
      search: '',
    },
  })

  return <Search label="search" control={control} />
}

export const Default: Story = {
  args: {},
  render: () => <SearchWithHook />,
}

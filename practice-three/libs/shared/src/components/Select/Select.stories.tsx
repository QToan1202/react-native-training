import type { Meta, StoryObj } from '@storybook/react'

import Select from './Select'
import SelectItem from './SelectItem'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'components/Select',
}

export default meta

type Story = StoryObj<typeof Select>

const items = [
  { name: 'Apple' },
  { name: 'Pear' },
  { name: 'Blackberry' },
  { name: 'Peach' },
  { name: 'Apricot' },
  { name: 'Melon' },
  { name: 'Honeydew' },
  { name: 'Starfruit' },
  { name: 'Blueberry' },
  { name: 'Raspberry' },
  { name: 'Strawberry' },
  { name: 'Mango' },
  { name: 'Pineapple' },
  { name: 'Lime' },
  { name: 'Lemon' },
  { name: 'Coconut' },
  { name: 'Guava' },
  { name: 'Papaya' },
  { name: 'Orange' },
  { name: 'Grape' },
  { name: 'Jackfruit' },
  { name: 'Durian' },
]

const renderSelectItems = items.map(({ name }, i) => (
  <SelectItem name={name} index={i} value={name.toLowerCase()} />
))

export const Default: Story = {
  args: {
    label: 'Select label',
    children: renderSelectItems,
  },
}

export const SliderWithNativeMode: Story = {
  args: {
    label: 'Fruits',
    native: true,
    children: renderSelectItems,
  },
}

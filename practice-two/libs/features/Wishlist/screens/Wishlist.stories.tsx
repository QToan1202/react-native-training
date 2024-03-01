import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import Wishlist from './index'

export default {
  title: 'screens/Wishlist',
  component: Wishlist,
} as ComponentMeta<typeof Wishlist>

const Template: ComponentStory<typeof Wishlist> = () => <Wishlist />
export const Default = Template.bind({})
Default.args = {}

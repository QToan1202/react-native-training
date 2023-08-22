import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { StoreCard } from '../index'

export default {
  title: 'StoreCard',
  component: StoreCard,
} as ComponentMeta<typeof StoreCard>

const Template: ComponentStory<typeof StoreCard> = (args) => <StoreCard {...args} />

export const Default = Template.bind({})
Default.args = {
  image: require('@assets/store/tradly.png'),
  source: require('@assets/avatar.png'),
  name: 'tradly store',
  btnTitle: 'follow',
  onPressBtn: action('card-action'),
}

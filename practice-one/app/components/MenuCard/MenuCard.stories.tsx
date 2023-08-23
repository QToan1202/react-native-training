import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { MenuCard } from '../index'

export default {
  title: 'Menu Card',
  component: MenuCard,
} as ComponentMeta<typeof MenuCard>

const Template: ComponentStory<typeof MenuCard> = (args) => <MenuCard {...args} />

export const Default = Template.bind({})
Default.args = {
  source: require('@assets/menu/beverages.png'),
  name: 'beverages',
  onPress: action('category-press'),
}

import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { AddCard } from '../index'

export default {
  title: 'screens/Checkout/Add Card',
  component: AddCard,
} as ComponentMeta<typeof AddCard>

const Template: ComponentStory<typeof AddCard> = () => <AddCard />

export const Default = Template.bind({})
Default.args = {}

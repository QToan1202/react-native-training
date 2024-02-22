import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { ProductDetail } from '../index'

export default {
  title: 'screens/Product Detail',
  component: ProductDetail,
} as ComponentMeta<typeof ProductDetail>

const Template: ComponentStory<typeof ProductDetail> = () => <ProductDetail />

export const Default = Template.bind({})
Default.args = {}

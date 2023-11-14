import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { DASHBOARD } from '@constants'
import { renderItem } from '@utils'

import { WrapList, ProductCard } from '../index'

export default {
  title: 'components/Wrap List',
  component: WrapList,
} as ComponentMeta<typeof WrapList>

const Template: ComponentStory<typeof WrapList> = (args) => <WrapList {...args} />

export const Default = Template.bind({})
Default.args = {
  data: DASHBOARD.PRODUCT_DATA,
  keyExtractor: ({ id }) => id,
  renderItem: renderItem(ProductCard),
  numColumns: 2,
  showsHorizontalScrollIndicator: false,
}

import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Bar, Button, Search } from '../index'

export default {
  title: 'Bar',
  component: Bar,
} as ComponentMeta<typeof Bar>

const Template: ComponentStory<typeof Bar> = (args) => <Bar {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  align: 'flex-start',
}

export const BarWithButton = Template.bind({})
BarWithButton.args = {
  title: 'Heading',
  align: 'space-between',
  iconList: [
    {
      label: 'favicon',
      icon: require('@assets/favicon.png'),
      action: action('press'),
    },
  ],
  children: (
    <>
      <Button
        onPress={action('button-press')}
        title="sort by"
        variant="tertiary"
        shrink
        style={{ flex: 1 }}
        leftIcon={require('@assets/favicon.png')}
      />
      <Button
        onPress={action('button-press')}
        title="location"
        variant="tertiary"
        shrink
        style={{ flex: 1 }}
        leftIcon={require('@assets/favicon.png')}
      />
      <Button
        onPress={action('button-press')}
        title="category"
        variant="tertiary"
        shrink
        style={{ flex: 1 }}
        leftIcon={require('@assets/favicon.png')}
      />
    </>
  ),
}

export const BarWithSearch = Template.bind({})
BarWithSearch.args = {
  title: 'Search',
  align: 'space-between',
  children: <Search placeholder="Search Product" style={{ flex: 1 }} />,
}

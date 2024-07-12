import type { Meta, StoryObj } from '@storybook/react'

import Tabs from './Tabs'
import createTab from './createTab'
import { Text } from '@shared/components'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'components/Tabs',
}

export default meta

type Story = StoryObj<typeof Tabs>

const TabComponent = () => {
  const [Tab1Header, Tab1Content] = createTab('tab1', 'Tab 1', <Text>Tab 1</Text>)
  const [Tab2Header, Tab2Content] = createTab('tab2', 'Tab 2', <Text>Tab 2</Text>)

  return (
    <Tabs
      renderTitle={() => (
        <>
          <Tab1Header />
          <Tab2Header />
        </>
      )}
      renderContent={() => (
        <>
          <Tab1Content />
          <Tab2Content />
        </>
      )}
    />
  )
}

export const Default: Story = {
  args: {},
  render: () => <TabComponent />,
}

import type { Meta, StoryObj } from '@storybook/react'
import { H2, Separator, Tabs, Theme } from 'tamagui'

import Tab from './Tab'
import TabsContent from './TabsContent'
import { Heading } from '../Heading'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'components/Tabs',
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Theme name="light">
      <Tabs defaultValue="tab1" flexDirection="column">
        <Tabs.List disablePassBorderRadius="bottom">
          <Tab value="tab1">
            <Heading>Profile</Heading>
          </Tab>
          <Tab value="tab2">
            <Heading>Connections</Heading>
          </Tab>
          <Tab value="tab3">
            <Heading>Notifications</Heading>
          </Tab>
        </Tabs.List>

        <Separator />

        <TabsContent value="tab1">
          <H2>Profile</H2>
        </TabsContent>

        <TabsContent value="tab2">
          <H2>Connections</H2>
        </TabsContent>

        <TabsContent value="tab3">
          <H2>Notifications</H2>
        </TabsContent>
      </Tabs>
    </Theme>
  ),
}

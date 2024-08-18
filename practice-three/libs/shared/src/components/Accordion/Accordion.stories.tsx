import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import { Text } from '../Text'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'components/Accordion',
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="1" label="1. Take a cold shower">
        <Text>
          Cold showers can help reduce inflammation, relieve pain, improve circulation, lower stress
          levels, and reduce muscle soreness and fatigue.
        </Text>
      </AccordionItem>
      <AccordionItem value="2" label="2. Eat 4 eggs">
        <Text>
          Eggs have been a dietary staple since time immemorial and there’s good reason for their
          continued presence in our menus and meals.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
}

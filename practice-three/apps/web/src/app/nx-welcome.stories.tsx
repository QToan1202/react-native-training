import type { Meta, StoryObj } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

const meta: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default meta;
type Story = StoryObj<typeof NxWelcome>;

export const Primary = {
  args: {},
};

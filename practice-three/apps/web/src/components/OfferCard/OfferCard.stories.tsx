import type { Meta, StoryObj } from '@storybook/react'

import OfferCard from './OfferCard'
import { jacketOffer, leviLogo, menJacket } from '../../assets/images'

const meta: Meta<typeof OfferCard> = {
  component: OfferCard,
  title: 'components/Offer Card',
  argTypes: {
    size: {
      options: ['sm', 'normal'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta

type Story = StoryObj<typeof OfferCard>

export const Default: Story = {
  args: {
    title: 'Min 60% off',
    image: jacketOffer,
    brandImage: leviLogo,
    size: 'sm',
  },
}

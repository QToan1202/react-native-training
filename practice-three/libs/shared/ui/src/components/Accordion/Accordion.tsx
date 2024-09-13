import { ReactNode } from 'react'
import { GetProps, Accordion as TAccordion, styled } from 'tamagui'

const Accordion = styled(TAccordion, {
  theme: 'light',
  overflow: 'hidden',
})

export type AccordionProps = GetProps<typeof Accordion> & {
  children: ReactNode
}

export default Accordion

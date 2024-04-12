import { ReactNode } from 'react'
import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Accordion as TAccordion,
  Theme,
} from 'tamagui'

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
  children: ReactNode
}

const Accordion = ({ children, ...rest }: AccordionProps) => (
  <Theme name="light">
    <TAccordion {...rest}>{children}</TAccordion>
  </Theme>
)

export default Accordion

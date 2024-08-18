import { ReactNode } from 'react'
import { Accordion, AccordionItemProps as TAccordionItemProps, Square, XStack } from 'tamagui'
import { ChevronDown } from '@tamagui/lucide-icons'

import { Heading } from '../Heading'

export type AccordionItemProps = TAccordionItemProps & {
  label: string
  children: ReactNode
}

type AccordionTriggerInnerProps = { open: boolean }

const AccordionItem = ({ label: heading, children, ...rest }: AccordionItemProps) => (
  <Accordion.Item {...rest}>
    <Accordion.Header asChild>
      <Accordion.Trigger>
        {({ open }: AccordionTriggerInnerProps) => (
          <XStack flexDirection="row" justifyContent="space-between">
            <Heading>{heading}</Heading>
            <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
              <ChevronDown size="$1" />
            </Square>
          </XStack>
        )}
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>{children}</Accordion.Content>
  </Accordion.Item>
)

export default AccordionItem

import { ReactNode, useId } from 'react'
import { Accordion, AccordionTriggerProps as TAccordionItemProps, Square, XStack } from 'tamagui'
import { ChevronDown } from '@tamagui/lucide-icons'

import { Heading } from '../Heading'

export type AccordionItemProps = TAccordionItemProps & {
  label: ReactNode
  children: ReactNode
}

type AccordionTriggerInnerProps = { open: boolean }

const AccordionItem = ({ label: heading, children, ...rest }: AccordionItemProps) => {
  const id = useId()

  return (
    <Accordion.Item value={id}>
      <Accordion.Header asChild>
        <Accordion.Trigger {...rest}>
          {({ open }: AccordionTriggerInnerProps) => (
            <XStack flexDirection="row" justifyContent="space-between">
              {typeof heading === 'object' ? heading : <Heading>{heading}</Heading>}
              <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                <ChevronDown color="$black" size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.HeightAnimator animation="fast">
        <Accordion.Content
          animation="fast"
          exitStyle={{ opacity: 0 }}
          backgroundColor="$transparent"
          paddingVertical={15}
          paddingHorizontal={5}
        >
          {children}
        </Accordion.Content>
      </Accordion.HeightAnimator>
    </Accordion.Item>
  )
}

export default AccordionItem

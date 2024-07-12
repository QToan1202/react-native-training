import { GetProps, styled, Tabs } from 'tamagui'
import { ReactNode } from 'react'

import { Text } from '@shared/components'

import useTabs from './useTabs'

const Tab = styled(Tabs.Tab, {
  flex: 1,
  borderWidth: 0,
  borderRadius: 0,
  backgroundColor: '$transparent',
  hoverStyle: {
    backgroundColor: '$gray_50',
  },
  focusStyle: {
    backgroundColor: '$transparent',
  },
  pressStyle: {
    backgroundColor: '$transparent',
  },
})

type TabProps = GetProps<typeof Tab>

const TabHeadingText = styled(Text, {
  fontSize: '$3',
  color: '$gray_100',
})

type TabHeadingTextProps = GetProps<typeof TabHeadingText>

const TabsContent = styled(Tabs.Content, {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  paddingVertical: 27,
})

type TabsContentProps = GetProps<typeof TabsContent>

type TabHeaderProps = TabHeadingTextProps & {
  containerStyle?: Omit<TabProps, 'value'>
}

type TabContentProps = Omit<TabsContentProps, 'value'>

const createTab = (value: string, title: string, content: ReactNode) => {
  const TabHeader = ({ containerStyle, ...rest }: TabHeaderProps) => {
    const currentValue = useTabs((state) => state.value)

    return (
      <Tab value={value} {...containerStyle}>
        <TabHeadingText
          {...(value === currentValue && {
            color: '$blue_300',
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            '$platform-web': {
              textUnderlineOffset: '6px',
              textDecorationThickness: '3px',
            },
          })}
          {...rest}
        >
          {title}
        </TabHeadingText>
      </Tab>
    )
  }

  const TabContent = ({ ...rest }: TabContentProps) => (
    <TabsContent value={value} {...rest}>
      {content}
    </TabsContent>
  )

  return [TabHeader, TabContent]
}

export default createTab

import { Separator, styled, Tabs as TTabs, TabsProps as TTabsProps } from 'tamagui'
import { ReactNode, useEffect } from 'react'

import useTabs from './useTabs'

export type TabsProps = TTabsProps & {
  renderTitle: () => ReactNode
  renderContent: () => ReactNode
}

const StyledTabs = styled(TTabs, {
  orientation: 'horizontal',
  flexDirection: 'column',
  overflow: 'hidden',
})

const Tabs = ({ renderTitle, renderContent, onValueChange, ...props }: TabsProps) => {
  const onChange = useTabs((state) => state.setValue)
  useEffect(() => {
    onChange(props.defaultValue || '')
  }, [onChange, props.defaultValue])
  const handleOnValue = (value: string) => {
    // Origin fn that being pass down by props
    onValueChange?.(value)

    // Set current value to context
    onChange(value)
  }

  return (
    <StyledTabs onValueChange={handleOnValue} {...props}>
      <TTabs.List>{renderTitle()}</TTabs.List>
      <Separator marginTop={22} alignSelf="stretch" />
      {renderContent()}
    </StyledTabs>
  )
}

export default Tabs

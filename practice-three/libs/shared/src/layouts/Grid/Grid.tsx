import { ReactNode } from 'react'
import { Stack, XStack, XStackProps, YStack } from 'tamagui'

import { getValidChildren } from '../../utils'

type GridLayoutProps = XStackProps & {
  layout?: 3 | 6
  children?: ReactNode
}

export const GridItem = ({ children }: { children: ReactNode }) => (
  <Stack flex={1}>{children}</Stack>
)

const Grid = ({ children, layout = 6, ...rest }: GridLayoutProps) => {
  const [item1, item2, item3, item4, item5, item6] = getValidChildren(children)
    .filter((child) => child.type === GridItem)
    .slice(0, layout)

  return (
    <XStack gap={25} {...rest}>
      <YStack flex={1} flexBasis={0}>
        {item1}
      </YStack>
      <YStack flex={1} flexBasis={0} gap={25}>
        {item2}
        {item3}
      </YStack>
      {layout === 6 && (
        <YStack flex={1} flexBasis={0} gap={25}>
          {item4}
          <XStack flex={1} flexBasis={0} gap={25}>
            {item5}
            {item6}
          </XStack>
        </YStack>
      )}
    </XStack>
  )
}

export default Grid

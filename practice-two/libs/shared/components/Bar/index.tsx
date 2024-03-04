import React, { ReactNode, memo } from 'react'
import isEqual from 'react-fast-compare'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { XStack, XStackProps, YStack, YStackProps } from 'tamagui'

import BackIcon from '@assets/back.svg'

import Heading from '../Heading'
import IconButton from '../IconButton'

import styles from './styles'

export type BarProps = {
  title?: string
  showBackBtn?: boolean
  align?: XStackProps['justifyContent']
  IconList?: ReactNode
  children?: ReactNode
  onPressBack?: () => void
} & YStackProps

const Bar = ({
  title,
  showBackBtn = false,
  align = 'flex-start',
  IconList,
  children,
  onPressBack,
  ...rest
}: BarProps) => {
  const checkProps = title || showBackBtn || IconList
  const insets = useSafeAreaInsets()

  return (
    <YStack
      paddingHorizontal={16}
      paddingTop={insets.top}
      paddingBottom={22}
      backgroundColor="$color.primary"
      space="$space.5"
      {...rest}
    >
      {checkProps && (
        <XStack space={4} alignItems="center" justifyContent={align}>
          {showBackBtn && (
            <IconButton style={styles.backBtn} onPress={onPressBack} noBackground>
              <BackIcon />
            </IconButton>
          )}
          {title && <Heading content={title} textTransform="capitalize" />}
          {IconList && (
            <XStack space={4} alignItems="center">
              {IconList}
            </XStack>
          )}
        </XStack>
      )}
      {children && (
        <XStack space={4} alignItems="center" justifyContent="space-between">
          {children}
        </XStack>
      )}
    </YStack>
  )
}

export default memo(Bar, isEqual)

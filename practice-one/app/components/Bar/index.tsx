import React, { ReactNode, memo, useMemo } from 'react'
import isEqual from 'react-fast-compare'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Heading from '@components/Heading'
import IconButton from '@components/IconButton'
import { containerStyles } from '@styles'

import styles from './styles'

export interface BarProps extends ViewProps {
  title?: string
  showBackBtn?: boolean
  align?: ViewStyle['justifyContent']
  IconList?: ReactNode
  style?: StyleProp<ViewStyle>
  children?: ReactNode
  onPressBack?: () => void
}

const Bar = ({
  title,
  showBackBtn = false,
  align = 'flex-start',
  IconList,
  style,
  children,
  onPressBack,
  ...rest
}: BarProps) => {
  const headingAlign: ViewStyle = useMemo(() => ({ justifyContent: align }), [align])
  const checkProps = title || showBackBtn || IconList
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[containerStyles.container, styles.bar, { paddingTop: insets.top }, style]}
      {...rest}
    >
      {checkProps && (
        <View style={[containerStyles.inline, align && headingAlign]}>
          {showBackBtn && (
            <IconButton
              style={styles.backBtn}
              icon={require('@assets/back.png')}
              onPress={onPressBack}
              noBackground
            />
          )}
          {title && <Heading style={styles.title} content={title} />}
          {IconList && <View style={containerStyles.inline}>{IconList}</View>}
        </View>
      )}
      <View style={[containerStyles.inline, styles.itemsContainer]}>{children}</View>
    </View>
  )
}

export default memo(Bar, isEqual)

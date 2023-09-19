import React, { ReactNode, useCallback, useMemo } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Heading from '@components/Heading'
import IconButton from '@components/IconButton'
import { IIconList } from '@types'
import { containerStyles } from '@styles'

import styles from './styles'

export interface BarProps extends ViewProps {
  title?: string
  showBackBtn?: boolean
  align?: ViewStyle['justifyContent']
  iconList?: IIconList[]
  iconNoBg?: boolean
  style?: StyleProp<ViewStyle>
  children?: ReactNode
  onPressBack?: () => void
}

const Bar = ({
  title,
  showBackBtn = false,
  align = 'flex-start',
  iconList,
  iconNoBg = false,
  style,
  children,
  onPressBack,
  ...rest
}: BarProps) => {
  const IconButtons: React.JSX.Element[] = useMemo(() => {
    if (!Array.isArray(iconList)) return []
    if (!iconList.length) return []

    return iconList.map(({ label, icon, action }: IIconList) => (
      <IconButton key={label} icon={icon} noBackground={iconNoBg} onPress={action} />
    ))
  }, [iconList, iconNoBg])

  const headingAlign: ViewStyle = useMemo(() => ({ justifyContent: align }), [align])
  const handlePressBack = useCallback(() => onPressBack && onPressBack(), [onPressBack])
  const checkProps = title || showBackBtn || Array.isArray(iconList)
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
              onPress={handlePressBack}
              noBackground
            />
          )}
          {title && <Heading style={styles.title} content={title} />}
          {Array.isArray(iconList) && <View style={containerStyles.inline}>{IconButtons}</View>}
        </View>
      )}
      <View style={[containerStyles.inline, styles.itemsContainer]}>{children}</View>
    </View>
  )
}

export default Bar

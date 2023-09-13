import React, { ReactNode, useMemo } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'

import Heading from '@components/Heading'
import IconButton from '@components/IconButton'
import { IIconList } from '@types'
import { containerStyles } from '@styles'

import styles from './styles'

export interface BarProps extends ViewProps {
  title: string
  align?: ViewStyle['justifyContent']
  iconList?: IIconList[]
  iconNoBg?: boolean
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

const Bar = ({
  title,
  align = 'flex-start',
  iconList,
  iconNoBg = false,
  style,
  children,
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

  return (
    <View style={[containerStyles.container, styles.bar, style]} {...rest}>
      <View style={[containerStyles.inline, styles.headingContainer, align && headingAlign]}>
        <Heading content={title} />
        {Array.isArray(iconList) && <View style={containerStyles.inline}>{IconButtons}</View>}
      </View>
      <View style={[containerStyles.inline, styles.itemsContainer]}>{children}</View>
    </View>
  )
}

export default Bar

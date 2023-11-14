import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageProps, StyleProp, View, ViewProps, ViewStyle } from 'react-native'

import { containerStyles, imageStyles } from '@styles'
import Paragraph from '@components/Paragraph'
import { TAlignAvatar, TSize } from '@types'

import styles from './styles'

export interface AvatarProps extends ViewProps {
  source: ImageProps['source']
  name: string
  size?: TSize
  align?: TAlignAvatar
  style?: StyleProp<ViewStyle>
}

const Avatar = ({ source, name, size = 'sm', align = 'inline', style, ...rest }: AvatarProps) => {
  return (
    <View style={[containerStyles[align], styles.spacing, style]} {...rest}>
      <Image
        source={source}
        style={[imageStyles.round, styles[size]]}
        accessibilityLabel={`${name}-avatar`}
      />
      <Paragraph content={name} style={styles.name} numberOfLines={1} />
    </View>
  )
}

export default memo(Avatar, isEqual)

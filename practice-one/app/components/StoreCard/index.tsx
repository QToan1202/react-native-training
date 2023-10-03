import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageBackgroundProps, StyleProp, View, ViewProps, ViewStyle } from 'react-native'

import Avatar, { AvatarProps } from '@components/Avatar'
import Button from '@components/Button'
import { containerStyles } from '@styles'

import styles from './styles'

export interface StoreCardProps extends AvatarProps, ViewProps {
  image: ImageBackgroundProps['source']
  btnTitle: string
  style?: StyleProp<ViewStyle>
  onPressBtn: () => void
}

const StoreCard = ({
  image,
  style,
  source,
  name,
  size = 'xl',
  btnTitle,
  onPressBtn,
  ...rest
}: StoreCardProps) => {
  return (
    <View style={[containerStyles.card, styles.container, style]} {...rest}>
      <Image source={image} style={styles.img} />
      <View style={styles.content}>
        <Avatar source={source} name={name} size={size} align="block" />
        <Button
          title={btnTitle}
          onPress={onPressBtn}
          style={styles.btn}
          titleStyle={styles.btnTitle}
        />
      </View>
    </View>
  )
}

export default memo(StoreCard, isEqual)

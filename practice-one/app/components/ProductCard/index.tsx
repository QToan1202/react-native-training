import { memo } from 'react'
import isEqual from 'react-fast-compare'
import {
  Image,
  ImageProps,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

import Avatar from '@components/Avatar'
import Paragraph from '@components/Paragraph'
import { containerStyles } from '@styles'

import styles from './styles'

export interface ProductCardProps extends TouchableOpacityProps {
  img: ImageProps['source']
  title: string
  avatar: ImageProps['source']
  storeName: string
  price: number
  discountPrice?: number
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

const ProductCard = ({
  img,
  title,
  avatar,
  storeName,
  price,
  discountPrice,
  style,
  onPress,
  ...rest
}: ProductCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[containerStyles.card, styles.container, style]}
      {...rest}
    >
      <>
        <Image source={img} style={styles.img} />
        <View style={styles.content}>
          <Paragraph content={title} style={styles.title} numberOfLines={1} />
          <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
            <Avatar source={avatar} name={storeName} size="sm" />
            <View style={containerStyles.inline}>
              {discountPrice && (
                <Paragraph
                  content={`$${price.toFixed(0)}`}
                  style={styles.discount}
                  numberOfLines={1}
                />
              )}
              <Paragraph
                content={`$${discountPrice ? discountPrice.toFixed(0) : price.toFixed(0)}`}
                style={styles.price}
                numberOfLines={1}
              />
            </View>
          </View>
        </View>
      </>
    </TouchableOpacity>
  )
}

export default memo(ProductCard, isEqual)

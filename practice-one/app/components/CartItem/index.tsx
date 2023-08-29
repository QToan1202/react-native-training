import { useMemo } from 'react'
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

import Paragraph from '@components/Paragraph'
import { containerStyles } from '@styles'

import styles from './styles'

export interface CartItemProps extends TouchableOpacityProps {
  image: ImageSourcePropType
  name: string
  price: number
  discountPrice?: number
  quantity: number
}

const CartItem = ({
  image,
  name,
  price,
  discountPrice,
  quantity,
  style,
  ...rest
}: CartItemProps) => {
  const calculateDiscountPercent = useMemo((): string => {
    if (!discountPrice) return ''
    return `${(100 - (discountPrice / price) * 100).toFixed()}% off`
  }, [discountPrice, price])

  return (
    <TouchableOpacity style={[styles.wrapper, style]} activeOpacity={0.5} {...rest}>
      <View style={styles.container}>
        <Image source={image} style={styles.img} />
        <View style={styles.content}>
          <Paragraph style={styles.text} content={name} />
          <View style={[containerStyles.inline]}>
            <Paragraph
              content={`$${discountPrice ? discountPrice.toFixed(0) : price.toFixed(0)}`}
              style={styles.price}
              numberOfLines={1}
            />
            {discountPrice && (
              <>
                <Paragraph
                  content={`$${price.toFixed(0)}`}
                  style={[styles.text, styles.discount]}
                  numberOfLines={1}
                />
                <Paragraph
                  content={calculateDiscountPercent}
                  style={styles.text}
                  numberOfLines={1}
                />
              </>
            )}
          </View>
          <Paragraph style={styles.text} content={`qty: ${quantity}`} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CartItem

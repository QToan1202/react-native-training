import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageProps } from 'react-native'
import { XStack, YStack, YStackProps } from 'tamagui'

import Avatar from '@components/Avatar'
import Paragraph from '@components/Paragraph'
import { containerStyles } from '@styles'

import styles from './styles'

export type ProductCardProps = YStackProps & {
  img: ImageProps['source']
  title: string
  avatar: ImageProps['source']
  storeName: string
  price: number
  discountPrice?: number
  onPress: () => void
}

const ProductCard = ({
  img,
  title,
  avatar,
  storeName,
  price,
  discountPrice,
  onPress,
  ...rest
}: ProductCardProps) => {
  return (
    <YStack
      onPress={onPress}
      style={containerStyles.card}
      alignSelf="flex-start"
      pressStyle={{ opacity: 0.8 }}
      {...rest}
    >
      <>
        <Image source={img} style={styles.img} />
        <YStack padding="$space.3" gap={16}>
          <Paragraph
            content={title}
            fontWeight="$2"
            color="$color.black"
            textTransform="capitalize"
            maxWidth={140}
            lineHeight="$true"
            numberOfLines={1}
          />
          <XStack alignItems="center" justifyContent="space-between" columnGap={4}>
            <Avatar source={avatar} name={storeName} size="sm" space="$space.2" />
            <XStack alignItems="center" columnGap={4}>
              {discountPrice && (
                <Paragraph
                  content={`$${price.toFixed(0)}`}
                  fontSize={10}
                  textDecorationLine="line-through"
                  color="$color.gray_50"
                  maxWidth={35}
                  numberOfLines={1}
                />
              )}
              <Paragraph
                content={`$${discountPrice ? discountPrice.toFixed(0) : price.toFixed(0)}`}
                color="$color.primary"
                fontWeight="$3"
                lineHeight="$true"
                maxWidth={35}
                numberOfLines={1}
              />
            </XStack>
          </XStack>
        </YStack>
      </>
    </YStack>
  )
}

export default memo(ProductCard, isEqual)

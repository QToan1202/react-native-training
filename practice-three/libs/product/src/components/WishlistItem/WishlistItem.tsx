import { Heading, XStack, XStackProps, YStack, getTokenValue } from 'tamagui'
import { GestureResponderEvent, ImageURISource } from 'react-native'

import { TProduct } from '@practice-three/types'
import { Image, Text } from '@practice-three/components'

import { HeartFill } from '../../assets/images'

type TWishlistItem = 'id' | 'name' | 'brandName' | 'price'
export type WishlistItemProps = XStackProps &
  Pick<TProduct, TWishlistItem> & {
    image: ImageURISource['uri']
    onPressItem: (id: string) => void
  }

const WishlistItem = ({
  id,
  image,
  name,
  brandName,
  price,
  onPressItem,
  onPress,
  ...rest
}: WishlistItemProps) => {
  const handlePressItemAction = (event: GestureResponderEvent) => {
    onPress?.(event)
    onPressItem?.(id)
  }

  return (
    <XStack alignItems="center" onPress={handlePressItemAction} {...rest}>
      <Image
        resizeMode="contain"
        borderRadius={5}
        source={{
          width: getTokenValue('$wishlistImg.width'),
          height: getTokenValue('$wishlistImg.height'),
          uri: image,
        }}
      />
      <YStack gap={8} marginLeft={18}>
        <Heading ellipse color="$blue_200" fontWeight="700" textTransform="capitalize">
          {name}
        </Heading>
        <Text ellipse color="$gray_100" fontSize={10} fontWeight="700" textTransform="capitalize">
          {brandName}
        </Text>
      </YStack>
      <YStack gap={28} marginLeft="auto" alignItems="flex-end">
        <Text color="$pure_black" fontSize="$4" fontWeight="700">
          &#36;{price.toFixed(2)} USD
        </Text>
        <HeartFill />
      </YStack>
    </XStack>
  )
}

export default WishlistItem

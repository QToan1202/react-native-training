import { Heading, Image, XStack, XStackProps, YStack, getTokenValue } from 'tamagui'
import { ImageURISource } from 'react-native'

import { TProduct } from '@shared/types'
import { Text } from '@shared/components'

import { HeartFill, placeholderImagePath } from '../../assets/images'

type TWishlistItem = 'name' | 'brandName' | 'price'
export type WishlistItemProps = XStackProps &
  Pick<TProduct, TWishlistItem> & {
    image: ImageURISource['uri']
  }

const WishlistItem = ({ image, name, brandName, price, ...rest }: WishlistItemProps) => (
  <XStack alignItems="center" {...rest}>
    <Image
      resizeMode="contain"
      alignSelf="center"
      borderRadius={5}
      source={{
        width: getTokenValue('$wishlistImg.width'),
        height: getTokenValue('$wishlistImg.height'),
        uri: image,
      }}
      defaultSource={{
        width: getTokenValue('$wishlistImg.width'),
        height: getTokenValue('$wishlistImg.height'),
        uri: placeholderImagePath,
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

export default WishlistItem

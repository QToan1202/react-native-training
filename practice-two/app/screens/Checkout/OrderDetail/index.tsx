import { useCallback, useMemo } from 'react'
import { Dimensions, Image } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, Separator, Spinner, XStack, YStack } from 'tamagui'

import { Button, CartItem, Heading, Paragraph, TrackerItem } from '@components'
import { RootStackParamList } from '@navigation/Stack'
import { ICart } from '@types'
import { useFindMultiProduct, useGetOderDetail } from '@hooks'

export type OrderDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'OrderDetail'>

const OrderDetail = ({ navigation, route }: OrderDetailScreenProps) => {
  const { id } = route.params
  const { data, isSuccess } = useGetOderDetail(process.env.ORDER_ENDPOINT, id)
  const products: Partial<ICart>[] = useFindMultiProduct(
    process.env.PRODUCT_ENDPOINT,
    data?.productId || [],
    data?.quantity || []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToHome = useCallback(() => navigation.navigate('Home'), [])
  const renderOrderItem = useMemo(() => {
    if (!isSuccess) return null

    return products.map((item: Partial<ICart>) => {
      const { id: itemId, img, name, price, discountPrice, quantity } = item

      if (!itemId || !img || !name || !price || !discountPrice || !quantity) return null

      return (
        <CartItem
          key={itemId}
          image={{ uri: img }}
          name={name}
          price={price}
          discountPrice={discountPrice}
          quantity={quantity}
        />
      )
    })
  }, [isSuccess, products])

  return isSuccess ? (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="$color.bg_layer">
      <YStack alignItems="center" paddingVertical="$space.6">
        <Image source={require('@assets/order/done.png')} />
        <Heading content="Thanks for Order" color="$color.gray_50" />
      </YStack>
      <YStack>{renderOrderItem}</YStack>
      <YStack
        marginTop="$space.3.5"
        marginBottom="$space.5"
        paddingLeft="$space.4.5"
        paddingRight="$space.3.5"
        backgroundColor="$color.white"
      >
        <YStack marginVertical="$space.3" space="$space.2.5">
          <Heading
            content="track order"
            fontWeight="$3"
            lineHeight="$4"
            fontSize="$2"
            color="$color.gray_50"
            textTransform="capitalize"
          />
          <Paragraph
            content="Order ID - 123455"
            fontWeight="$2"
            color="$color.gray_400"
            lineHeight="$3"
          />
        </YStack>
        <Separator borderColor="$color.primary" borderBottomWidth={3} width={70} />
        <YStack marginTop="$space.5" marginBottom="$space.3" space="$space.7">
          <TrackerItem
            trackStatus="order placed"
            description="Order#123455 from Fashion Point"
            date={new Date('2019-05-08')}
            time="11:30 AM"
          />
          <TrackerItem
            trackStatus="payment confirmed"
            description="Payment Confirmed Status"
            date={new Date('2019-05-08')}
            time="11:30 AM"
          />
          <TrackerItem
            trackStatus="processed"
            description="Processed Status"
            date={new Date('2019-05-08')}
            time="11:30 AM"
          />
          <TrackerItem
            trackStatus="delivered"
            description="Delivered Status"
            date={new Date('2019-05-08')}
            time="11:30 AM"
          />
        </YStack>
      </YStack>
      <YStack
        paddingVertical="$space.3"
        paddingHorizontal="$space.4"
        backgroundColor="$color.white"
      >
        <Heading
          content="delivery address"
          fontWeight="$3"
          lineHeight="$4"
          fontSize="$2"
          color="$color.gray_50"
          textTransform="capitalize"
        />
        <Separator
          marginTop="$space.3"
          marginLeft="$space.-3"
          borderColor="$color.divider"
          width={Dimensions.get('window').width}
        />
        <YStack paddingVertical="$space.3" space="$space.2.5">
          <Paragraph content="Tradly team" fontWeight="$2" color="$color.dark_50" lineHeight="$3" />
          <Paragraph
            content="Flat Number 512, Eden Garden, Rewari"
            fontWeight="$2"
            fontSize={12}
            color="$color.gray_400"
            lineHeight="$3"
          />
          <XStack alignItems="center" space="$space.1.5">
            <Paragraph
              content="Mobile: "
              fontWeight="$2"
              fontSize={12}
              color="$color.gray_400"
              lineHeight="$3"
            />
            <Paragraph
              content="9876543210"
              fontWeight="$2"
              fontSize={12}
              color="$color.dark_50"
              lineHeight="$3"
            />
          </XStack>
        </YStack>
      </YStack>
      <Button
        variant="quaternary"
        backgroundColor="$color.transparent"
        borderColor="$color.transparent"
        title="Back to Home"
        marginTop="$space.3.5"
        marginBottom="$space.7"
        fontWeight="$3"
        fontSize="$1"
        lineHeight="$4"
        color="$color.dark_50"
        textTransform="none"
        onPress={handleNavigateToHome}
      />
    </ScrollView>
  ) : (
    <Spinner size="large" color="$color.primary" />
  )
}

export default OrderDetail

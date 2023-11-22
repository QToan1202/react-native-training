import { useCallback } from 'react'
import { Dimensions, Image } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, Separator, XStack, YStack } from 'tamagui'

import { Button, CartItem, Heading, Paragraph, TrackerItem } from '@components'
import { RootStackParamList } from '@navigation/Stack'

export type OrderDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'OrderDetail'>

const OrderDetail = ({ navigation }: OrderDetailScreenProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNavigateToHome = useCallback(() => navigation.navigate('Home'), [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="$color.bg_layer">
      <YStack alignItems="center" paddingVertical="$space.6">
        <Image source={require('@assets/order/done.png')} />
        <Heading content="Thanks for Order" color="$color.gray_50" />
      </YStack>
      <YStack>
        <CartItem
          image={require('@assets/cart/item.png')}
          name="coca cola"
          price={50}
          discountPrice={25}
          quantity={1}
        />
      </YStack>
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
  )
}

export default OrderDetail

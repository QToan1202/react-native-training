import { useCallback } from 'react'
import { Image, ScrollView, View } from 'react-native'

import { Button, CartItem, Heading, Paragraph, TrackerItem } from '@components'
import { containerStyles } from '@styles'

import styles from './styles'

const OrderDetail = () => {
  const handlePress = useCallback(() => {
    throw new Error('Function not implemented.')
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={require('@assets/order/done.png')} />
        <Heading style={styles.heading} content="Thanks for Order" />
      </View>
      <View>
        <CartItem
          image={require('@assets/cart/item.png')}
          name="coca cola"
          price={50}
          discountPrice={25}
          quantity={1}
        />
      </View>
      <View style={styles.detail}>
        <View style={styles.titleContainer}>
          <Heading style={styles.title} content="track order" />
          <Paragraph style={styles.text} content="Order ID - 123455" />
        </View>
        <View style={styles.line} />
        <View style={styles.status}>
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
        </View>
      </View>
      <View style={styles.addressInfo}>
        <Heading style={styles.title} content="delivery address" />
        <View style={styles.divider} />
        <View style={styles.addressContent}>
          <Paragraph style={[styles.text, styles.textDark]} content="Tradly team" />
          <Paragraph
            style={[styles.text, styles.addressText]}
            content="Flat Number 512, Eden Garden, Rewari"
          />
          <View style={containerStyles.inline}>
            <Paragraph style={[styles.text, styles.addressText]} content="Mobile: " />
            <Paragraph
              style={[styles.text, styles.textDark, styles.addressText]}
              content="9876543210"
            />
          </View>
        </View>
      </View>
      <Button
        style={styles.btn}
        titleStyle={styles.btnTitle}
        title="Back to Home"
        variant="quaternary"
        onPress={handlePress}
      />
    </ScrollView>
  )
}

export default OrderDetail

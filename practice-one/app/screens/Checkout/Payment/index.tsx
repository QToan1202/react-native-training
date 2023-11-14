import { useCallback, useMemo, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Address, PaymentCard, PaymentCardPlaceholder, Price, Radio, TabBar } from '@components'
import { CHECKOUT, PAYMENT_METHODS } from '@constants'
import { ICardInformation } from '@types'

import styles from './styles'

export interface PaymentScreenProps extends NativeStackScreenProps<RootStackParamList, 'Payment'> {}

const Payment = ({ navigation }: PaymentScreenProps) => {
  const [selectedCard, setSelectedCard] = useState<string>('')
  const handlePress = useCallback(() => undefined, [])
  const numberOfCards = useRef<number>(CHECKOUT.CARDS.length)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const renderPagerIndex: React.JSX.Element[] = useMemo(() => {
    const listIndex: React.JSX.Element[] = []
    for (let i = 0; i <= numberOfCards.current; i += 1) {
      listIndex.push(
        <View key={i} style={[styles.dot, currentIndex === i ? styles.active : styles.normal]} />
      )
    }

    return listIndex
  }, [currentIndex])
  const handleViewPagerSelected = useCallback((e: PagerViewOnPageSelectedEvent) => {
    setCurrentIndex(e.nativeEvent.position)
  }, [])
  const handleCardSelected = useCallback(
    (data: ICardInformation) => setSelectedCard(data.cardNumber),
    []
  )
  const handleAddCard = useCallback(() => navigation.navigate('AddCard'), [navigation])
  const ViewPager2 = useMemo(
    () => (
      <PagerView
        initialPage={0}
        style={styles.cardCarousel}
        onPageSelected={handleViewPagerSelected}
      >
        {[...CHECKOUT.CARDS, { isPlaceholder: true }].map((item) => (
          <View key={'id' in item ? item.id : numberOfCards.current + 99}>
            {'id' in item ? (
              <PaymentCard
                {...item}
                isSelected={item.cardNumber === selectedCard}
                style={styles.cardItem}
                onCardSelected={handleCardSelected}
              />
            ) : (
              <PaymentCardPlaceholder style={styles.cardItem} onTouchPlaceHolder={handleAddCard} />
            )}
          </View>
        ))}
      </PagerView>
    ),
    [handleAddCard, handleCardSelected, handleViewPagerSelected, selectedCard]
  )
  const handleCheckout = useCallback(() => navigation.navigate('OrderDetail'), [navigation])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          {ViewPager2}
          <View style={styles.dotGroup}>{renderPagerIndex}</View>
        </View>
        <View>
          <Radio style={styles.radio} radioList={PAYMENT_METHODS} />
        </View>
        <Address
          name="Deliver to Tradly Team, 75119"
          streetAddress="Kualalumpur, Malaysia"
          onPress={handlePress}
        />
        <ScrollView>
          <Price total={25} data={CHECKOUT.PRICE_DETAILS} />
        </ScrollView>
      </View>
      <TabBar title="Checkout" onPress={handleCheckout} />
    </>
  )
}

export default Payment

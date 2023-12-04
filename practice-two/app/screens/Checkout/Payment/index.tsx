import { useCallback, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, XStack, YStack } from 'tamagui'

import { RootStackParamList } from '@navigation/Stack'
import { Address, PaymentCard, PaymentCardPlaceholder, Price, Radio, TabBar } from '@components'
import { CHECKOUT, PAYMENT_METHODS } from '@constants'
import { ICardBase } from '@types'
import { useOrderStore } from '@stores'

import styles from './styles'

export type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const address = useOrderStore((state) => state.address)
  const [selectedCard, setSelectedCard] = useState<string>('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeAddress = useCallback(() => navigation.navigate('AddCard'), [])
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
  const handleCardSelected = useCallback((data: ICardBase) => setSelectedCard(data.number), [])
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
                isSelected={item.number === selectedCard}
                alignSelf="center"
                onCardSelected={handleCardSelected}
              />
            ) : (
              <PaymentCardPlaceholder alignSelf="center" onTouchPlaceHolder={handleAddCard} />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack space="$space.3.5" backgroundColor="$color.bg_layer">
          <YStack justifyContent="center" backgroundColor="$color.white">
            {ViewPager2}
            <XStack
              marginBottom="$space.5"
              space="$space.3.5"
              alignItems="center"
              justifyContent="center"
            >
              {renderPagerIndex}
            </XStack>
          </YStack>
          <Radio radioList={PAYMENT_METHODS} backgroundColor="$color.white" />
          <Address
            name={address?.name || 'Deliver to Tradly Team, 75119'}
            streetAddress={address?.streetAddress || 'Kualalumpur, Malaysia'}
            onPress={handleChangeAddress}
          />
          <Price total={25} data={CHECKOUT.PRICE_DETAILS} />
        </YStack>
      </ScrollView>
      <TabBar title="Checkout" onPress={handleCheckout} />
    </>
  )
}

export default Payment

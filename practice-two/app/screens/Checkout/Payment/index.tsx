import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, XStack, YStack } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import { RootStackParamList } from '@navigation/Stack'
import { Address, PaymentCard, PaymentCardPlaceholder, Price, Radio, TabBar } from '@components'
import { CHECKOUT, PAYMENT_METHODS } from '@constants'
import { ICardBase, ICart } from '@types'
import { useAuthStore, useCartStore, useOrderStore } from '@stores'
import { useOrderProduct } from '@hooks'

import styles from './styles'

export type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const cart = useCartStore((state) => state.cart)
  const user = useAuthStore((state) => state.user)
  const { mutate, data, isSuccess } = useOrderProduct(process.env.ORDER_ENDPOINT)
  const [address, setCard] = useOrderStore(useShallow((state) => [state.address, state.setCard]))
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
  const handleCardSelected = useCallback((card: ICardBase) => {
    setSelectedCard(card.number)
    setCard(card)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
  const handleCheckout = useCallback(() => {
    if (!user) return
    if (!cart.length) return

    mutate({
      productId: cart.map((item: ICart) => item.id),
      quantity: cart.map((item: ICart) => item.quantity),
      userId: user.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, user])

  useEffect(() => {
    if (!isSuccess) return
    navigation.navigate('OrderDetail', { id: String(data.id) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

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
          <Price data={cart} deliveryFee={1.5} />
        </YStack>
      </ScrollView>
      <TabBar title="Checkout" onPress={handleCheckout} />
    </>
  )
}

export default Payment

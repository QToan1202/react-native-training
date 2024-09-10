import { useMemo } from 'react'
import { Separator, XStack, YStack } from 'tamagui'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'
import { useToastController } from '@tamagui/toast'

import { Button, Heading, IconButton, Skeleton, Text, Toast } from '@practice-three/shared/ui'
import { OrderTabScreenProps } from '@practice-three/shared/types'

import { Header, OrderItem, OrderItemSkeleton, Step, StepLabel, Stepper } from '../../components'
import { getStepIndex } from '../../utils'
import { EXPECTED_DELIVERY_TIME, FEES, PAYMENT_METHODS, STEPPER_LABELS } from '../../constants'
import { ArrowRight, Debit, Delivery } from '../../assets/images'
import { findAddressQuery, useCheckoutOrder, useFindProducts } from '../../hooks'
import { TOrderItem } from '../../types'
import { useCheckoutStore } from '../../contexts'

type OrderScreenProps = OrderTabScreenProps<'Order'>

const calculatePrice = (data: TOrderItem[]) => {
  return data.reduce((prev, curr) => (prev += curr.price * curr.quantity), 0)
}

const Order = ({ navigation }: OrderScreenProps) => {
  const handleGoBack = () => navigation.goBack()
  const renderStepper = (
    <Stepper activeStep={getStepIndex(STEPPER_LABELS, 'Payment')}>
      {STEPPER_LABELS.map((label: string) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
  const [isLoading, data] = useFindProducts()
  const renderItem = useMemo(() => {
    if (isLoading) return [...Array(2).keys()].map((item) => <OrderItemSkeleton key={item} />)

    return data.map((orderItem: TOrderItem) => {
      const {
        id,
        image,
        name,
        quantity,
        price,
        size,
        date,
        brandName,
        address: { firstName, lastName },
      } = orderItem
      const receiver = `${firstName} ${lastName}`
      const props = { id, image, name, quantity, price, size, date, brandName, receiver }

      return <OrderItem key={id} {...props} />
    })
  }, [data, isLoading])
  const [addressId, paymentMethod] = useCheckoutStore((state) => [
    state.addressId,
    state.paymentMethod,
  ])
  const { data: address, isSuccess: isFoundAddress } = useQuery(
    findAddressQuery('/addresses', addressId || 'g7h8')
  )
  const renderAddressInfo = useMemo(() => {
    if (!isFoundAddress)
      return (
        <YStack gap={16} padding={20}>
          <Skeleton width={100} height={22} />
          <YStack gap={4}>
            <Skeleton width={60} height={16} />
            <Skeleton width={200} height={16} />
          </YStack>
        </YStack>
      )

    const {
      firstName,
      lastName,
      city,
      state,
      country,
      zipCode,
      address: addressStreet,
      optionalAddress,
    } = address
    return (
      <YStack gap={16} padding={20}>
        <Heading color="$black" fontSize="$3" fontWeight="bold">
          Delivery Address
        </Heading>
        <XStack justifyContent="space-between">
          <YStack gap={4}>
            <Text>{`${firstName} ${lastName}`}</Text>
            <Text>
              {`${addressStreet}, ${city}, ${state}, ${country}, VA ${zipCode}`}
              {optionalAddress.trim().length && `,OP ${optionalAddress}`}
            </Text>
          </YStack>
          <IconButton>
            <ArrowRight />
          </IconButton>
        </XStack>
      </YStack>
    )
  }, [address, isFoundAddress])
  const renderPaymentMethod = useMemo(() => {
    return (
      <YStack gap={16} padding={20}>
        <Heading color="$black" fontSize="$3" fontWeight="bold">
          Payment Method
        </Heading>
        <XStack justifyContent="space-between">
          <XStack gap={24}>
            {PAYMENT_METHODS.find(
              (method) => method.label.toLowerCase() === paymentMethod.toLowerCase()
            )?.icon || <Debit />}
            <Text>
              Pay with <Text textTransform="capitalize">{paymentMethod}</Text>
            </Text>
          </XStack>
          <IconButton>
            <ArrowRight />
          </IconButton>
        </XStack>
      </YStack>
    )
  }, [paymentMethod])
  const toast = useToastController()
  const { mutate: checkoutOrder, isPending: isCheckingOrderOut } = useCheckoutOrder('/orders')
  const handleCheckoutOrder = () => {
    checkoutOrder(null, {
      onSuccess: () => {
        // @ts-expect-error: Declare composite Home Stack screen
        navigation.navigate('Home')
        toast.show('Checkout order success', {
          message:
            'Your order have been checkout success. We will process your order as soon as possible!',
        })
      },
      onError: (error: Error) => {
        toast.show('There is an error in checkout process', { message: error.message })
      },
    })
  }

  return (
    <YStack flex={1} justifyContent="space-between" fullscreen>
      <YStack>
        <Header title="Order Summary" onBack={handleGoBack} />
        {renderStepper}
        <XStack marginTop={25} marginBottom={12} alignItems="center" gap={5}>
          <Delivery />
          <Text>
            Estimated Delivery by
            {dayjs().add(EXPECTED_DELIVERY_TIME, 'day').format('dddd, DD MMM')}
          </Text>
        </XStack>
        <Separator borderColor="$pale" />
        <YStack gap={6}>{renderItem}</YStack>
        <Separator borderColor="$pale" />
        {renderAddressInfo}
        <Separator borderColor="$pale" />
        {renderPaymentMethod}
        <Separator borderColor="$pale" />
      </YStack>
      <XStack
        justifyContent="space-between"
        paddingVertical={12}
        paddingHorizontal={18}
        backgroundColor="$white"
        borderWidth={1}
        borderColor="$dust"
      >
        <YStack justifyContent="space-between">
          <Text color="$primary" fontWeight="700" fontSize="$4">
            ${(calculatePrice(data) + FEES.SHIP + FEES.IMPORT).toFixed(2)}
          </Text>
          <Text fontWeight="500">View Price Details</Text>
        </YStack>
        <Button
          title="pay now"
          paddingVertical={10}
          fontSize="$3"
          fontWeight="700"
          loading={isCheckingOrderOut}
          onPress={handleCheckoutOrder}
        />
      </XStack>
      <Toast />
    </YStack>
  )
}

export default Order

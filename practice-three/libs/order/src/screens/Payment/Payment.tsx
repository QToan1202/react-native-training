import { Fragment } from 'react'
import { ScrollView, Separator, YStack } from 'tamagui'

import { OrderTabScreenProps } from '@practice-three/shared/types'
import { Accordion, AccordionItem, Button } from '@practice-three/shared/ui'

import { CardList, Header, PaymentItem, Step, StepLabel, Stepper } from '../../components'
import { PAYMENT_METHODS, STEPPER_LABELS, type TPaymentMethod } from '../../constants'
import { useAddressStore } from '../../contexts'
import { getStepIndex } from '../../utils'
import { Debit } from '../../assets/images'

type PaymentScreenProps = OrderTabScreenProps<'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const handleGoBack = () => navigation.goBack()
  const handleNavigateToAddPayment = () => navigation.navigate('AddPayment')
  const selectedId = useAddressStore((state) => state.selectedId)
  const renderStepper = (
    <Stepper
      activeStep={
        selectedId
          ? getStepIndex(STEPPER_LABELS, 'Payment')
          : getStepIndex(STEPPER_LABELS, 'Address')
      }
    >
      {STEPPER_LABELS.map((label: string) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )

  return (
    <YStack flex={1} justifyContent="space-between">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Header title="Choose Payment Method" onBack={handleGoBack} />
        {renderStepper}
        <Accordion type="multiple">
          <AccordionItem
            backgroundColor="$transparent"
            borderWidth={0}
            padding={0}
            label={<PaymentItem icon={<Debit />} label="Debit or Credit Card" />}
          >
            <YStack flex={1} marginLeft={50} gap={8}>
              <CardList />
            </YStack>
          </AccordionItem>
        </Accordion>
        <YStack>
          {PAYMENT_METHODS.map((value: TPaymentMethod) => (
            <Fragment key={value.label}>
              <Separator borderColor="$pale" marginLeft={50} />
              <PaymentItem justifyContent="flex-start" {...value} />
            </Fragment>
          ))}
        </YStack>
      </ScrollView>
      <Button
        title="Add Payment Method"
        fontWeight="700"
        fontSize="$3"
        onPress={handleNavigateToAddPayment}
      />
    </YStack>
  )
}

export default Payment

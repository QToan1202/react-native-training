import { Fragment } from 'react'
import { ScrollView, Separator, YGroup, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CheckoutStack } from '@shared/types'
import { Accordion, AccordionItem, Button } from '@shared/components'

import { Header, PaymentItem, Step, StepLabel, Stepper } from '../../components'
import { PAYMENT_METHODS, STEPPER_LABELS, type TPaymentMethod } from '../../constants'
import { useAddressStore } from '../../contexts'
import { getStepIndex } from '../../utils'
import { Debit } from '../../assets/images'

type PaymentScreenProps = NativeStackScreenProps<CheckoutStack, 'Payment'>

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
    <YStack flex={1} justifyContent="space-between" h={'90vh'}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Header title="Choose Payment Method" onBack={handleGoBack} />
        {renderStepper}
        <Accordion type="multiple">
          <AccordionItem
            backgroundColor="$transparent"
            borderWidth={0}
            borderBottomWidth={1}
            borderBottomColor="$pale"
            padding={0}
            label={<PaymentItem icon={<Debit />} label="Debit or Credit Card" />}
          >
            <PaymentItem
              padding={0}
              marginLeft={50}
              icon={<Debit />}
              label="Debit or Credit Card"
            />
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

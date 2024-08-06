import { Heading, ScrollView, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button } from '@shared/components'
import { CheckoutStack } from '@shared/types'

import { Header, Step, StepLabel, Stepper } from '../../components'
import { STEPPER_LABELS } from '../../constants'
import { AddressList } from '../../components'
import { useAddressStore } from '../../contexts'

type AddressScreenProps = NativeStackScreenProps<CheckoutStack, 'Address'>

const getStepIndex = (label: string) =>
  STEPPER_LABELS.findIndex(
    (value: string) => !value.localeCompare(label, 'en', { sensitivity: 'base' })
  )

const Address = ({ navigation }: AddressScreenProps) => {
  const handleGoBack = () => navigation.goBack()
  const handleAddAddress = () => navigation.navigate('AddAddress')
  const selectedId = useAddressStore((state) => state.selectedId)
  const renderStepper = (
    <Stepper activeStep={selectedId ? getStepIndex('Address') : getStepIndex('Cart')}>
      {STEPPER_LABELS.map((label: string) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )

  return (
    <YStack justifyContent="space-between" gap={24}>
      <YStack gap={20}>
        <Header title="Choose Delivery Address" onBack={handleGoBack} />
        {renderStepper}
        <ScrollView contentContainerStyle={{ flex: 1, gap: 10 }}>
          <AddressList />
        </ScrollView>
      </YStack>
      <Button title="add an address" onPress={handleAddAddress} />
    </YStack>
  )
}

export default Address

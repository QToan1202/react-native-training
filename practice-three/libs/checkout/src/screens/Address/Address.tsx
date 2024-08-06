import { Heading, ScrollView, XStack, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button, IconButton } from '@shared/components'
import { CheckoutStack } from '@shared/types'

import { Step, StepLabel, Stepper } from '../../components'
import { STEPPER_LABELS } from '../../constant'
import { ArrowLeft } from '../../assets/images'
import { AddressList } from '../../components'

type AddressScreenProps = NativeStackScreenProps<CheckoutStack, 'Address'>

const Address = ({ navigation }: AddressScreenProps) => {
  const handleGoBack = () => navigation.goBack()
  const handleAddAddress = () => navigation.navigate('AddAddress')
  const renderHeader = (
    <XStack gap={6} alignItems="center">
      <IconButton onPress={handleGoBack}>
        <ArrowLeft />
      </IconButton>
      <Heading color="$pure_black" fontSize="$4" fontWeight="500">
        Choose Delivery Address
      </Heading>
    </XStack>
  )
  const renderStepper = (
    <Stepper alignSelf="center" activeStep={0}>
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
        {renderHeader}
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

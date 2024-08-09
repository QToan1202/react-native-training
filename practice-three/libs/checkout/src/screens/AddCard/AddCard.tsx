import { YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CheckoutStack } from '@shared/types'

import { CardForm, Header } from '../../components'

type AddPaymentScreenProps = NativeStackScreenProps<CheckoutStack, 'AddPayment'>

const AddCard = ({ navigation }: AddPaymentScreenProps) => {
  const handleGoBack = () => navigation.goBack()

  return (
    <YStack>
      <Header title="Add Card" onBack={handleGoBack} />
      <CardForm />
    </YStack>
  )
}

export default AddCard

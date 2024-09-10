import { YStack } from 'tamagui'

import { OrderTabScreenProps } from '@practice-three/shared/types'

import { CardForm, Header } from '../../components'

type AddPaymentScreenProps = OrderTabScreenProps<'AddPayment'>

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

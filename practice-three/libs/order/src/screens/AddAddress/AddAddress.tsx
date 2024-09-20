import { YStack } from 'tamagui'
import { KeyboardAvoidingView } from 'react-native'

import { OrderTabScreenProps } from '@practice-three/shared/types'

import { AddressForm, Header } from '../../components'

type AddAddressScreenProps = OrderTabScreenProps<'AddAddress'>

const AddAddress = ({ navigation, route }: AddAddressScreenProps) => {
  const params = route.params
  const handleGoBack = () => navigation.goBack()

  return (
    <YStack flex={1}>
      <Header title="Add Address" onBack={handleGoBack} />
      <KeyboardAvoidingView>
        <AddressForm id={params?.id} />
      </KeyboardAvoidingView>
    </YStack>
  )
}

export default AddAddress

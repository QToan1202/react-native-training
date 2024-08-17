import { YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingView } from 'react-native'

import { CheckoutStack } from '@practice-three/types'

import { AddressForm, Header } from '../../components'

type AddAddressScreenProps = NativeStackScreenProps<CheckoutStack, 'AddAddress'>

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

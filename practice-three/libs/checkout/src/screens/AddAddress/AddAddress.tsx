import { YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingView } from 'react-native'

import { CheckoutStack } from '@shared/types'

import { AddressForm, Header } from '../../components'

type AddAddressScreenProps = NativeStackScreenProps<CheckoutStack, 'AddAddress'>

const AddAddress = ({ navigation }: AddAddressScreenProps) => {
  const handleGoBack = () => navigation.goBack()

  return (
    <YStack flex={1}>
      <Header title="Add Address" onBack={handleGoBack} />
      <KeyboardAvoidingView>
        <AddressForm />
      </KeyboardAvoidingView>
    </YStack>
  )
}

export default AddAddress

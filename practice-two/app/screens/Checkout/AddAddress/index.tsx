import { useCallback, useEffect, useMemo } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import { RootStackParamList } from '@navigation/Stack'
import { Button, Input, TabBar } from '@components'
import { IAddressBase, IForm } from '@types'
import { ADDRESS_FORM_FIELDS } from '@constants'
import { TAddressFormFields } from '@constants/screens/addAddressFields'
import { useAddAddress } from '@hooks'
import { useAuthStore } from '@stores'

import styles from './styles'

export type AddAddressScreenProps = NativeStackScreenProps<RootStackParamList, 'AddAddress'>

const AddAddress = ({ navigation }: AddAddressScreenProps) => {
  const { mutate, isSuccess } = useAddAddress(process.env.ADDRESS_ENDPOINT)
  const [isHydrated, user] = useAuthStore(useShallow((state) => [state.isHydrated, state.user]))
  const { control, handleSubmit } = useForm<IForm>()
  const handlePress = useCallback(() => undefined, [])
  const handleSaveAddress = useCallback(
    (addressInformation: IAddressBase) => {
      if (!isHydrated) return
      if (!user) return
      // TODO: Save address to context
      mutate({
        ...addressInformation,
        userId: user.id,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isHydrated, user]
  )
  const renderFormFields = useMemo(
    () =>
      ADDRESS_FORM_FIELDS.map(({ id, ...fieldData }: TAddressFormFields) => (
        <Input {...fieldData} key={id} control={control} isShowError />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    if (isSuccess) {
      navigation.goBack()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  return (
    <>
      <ScrollView flex={1} backgroundColor="$color.bg_layer">
        <Button
          title="Use current location"
          variant="quaternary"
          color="$color.blue"
          textTransform="none"
          leftIcon={require('@assets/location.png')}
          onPress={handlePress}
        />
        <KeyboardAvoidingView style={styles.form}>{renderFormFields}</KeyboardAvoidingView>
      </ScrollView>
      <TabBar title="Save" onPress={handleSubmit(handleSaveAddress)} />
    </>
  )
}

export default AddAddress

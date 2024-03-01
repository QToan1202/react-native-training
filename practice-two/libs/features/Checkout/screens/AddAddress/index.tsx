import { useCallback, useMemo } from 'react'
import { KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'tamagui'
import { useShallow } from 'zustand/react/shallow'

import { Button, Input, TabBar, IAddressBase, IForm, useAuthStore } from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'
import { useAddAddress } from '../../hooks'
import { ADDRESS_FORM_FIELDS, TAddressFormFields } from '../../constants'

import styles from './styles'

export type AddAddressScreenProps = NativeStackScreenProps<RootStackParamList, 'AddAddress'>

const AddAddress = ({ navigation }: AddAddressScreenProps) => {
  const { mutate, status } = useAddAddress(process.env.ADDRESS_ENDPOINT)
  const [isHydrated, user] = useAuthStore(useShallow((state) => [state.isHydrated, state.user]))
  const { control, handleSubmit } = useForm<IForm>()
  const handlePress = useCallback(() => undefined, [])
  const handleSaveAddress = useCallback(
    (addressInformation: IAddressBase) => {
      if (!isHydrated) return
      if (!user) return
      // TODO: Save address to context
      mutate(
        {
          ...addressInformation,
          userId: user.id,
        },
        {
          onSuccess: () => {
            navigation.goBack()
            ToastAndroid.show('Add address success!!!', ToastAndroid.SHORT)
          },
        }
      )
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

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }} backgroundColor="$color.bg_layer">
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
      <TabBar
        title="Save"
        isDisable={status === 'pending'}
        onPress={handleSubmit(handleSaveAddress)}
      />
    </>
  )
}

export default AddAddress

import { useCallback } from 'react'
import { Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import { useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { XStack, YStack } from 'tamagui'

import { RootStackParamList } from '@navigation/Stack'
import { Input, PaymentCard, TabBar } from '@components'
import { IForm } from '@types'

import styles from './styles'

export type AddCardScreenProps = NativeStackScreenProps<RootStackParamList, 'AddCard'>
const AddCard = ({ navigation }: AddCardScreenProps) => {
  const { control, watch, handleSubmit } = useForm<IForm>()
  const observeFields = watch()
  const handleSaveCardInfo = useCallback(() => {
    // TODO: Save card information to context
    navigation.navigate('Payment')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <YStack flex={1} backgroundColor="$color.bg_layer">
        <XStack
          paddingHorizontal="$space.6"
          justifyContent="center"
          alignItems="center"
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').width / 2}
        >
          <PaymentCard
            name={observeFields.name || ''}
            cardNumber={observeFields.number || ''}
            expires={observeFields.expiresDate || ''}
            cvc={observeFields.cvc || ''}
            containerStyle={{
              alignSelf: 'center',
              marginBottom: 30,
            }}
            style={{
              maxWidth: undefined,
              maxHeight: undefined,
              aspectRatio: 3 / 1.8,
            }}
          />
        </XStack>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.form}
        >
          <Input
            name="number"
            label="Card Number"
            control={control}
            keyboardType="numeric"
            isShowError
            rules={{
              required: 'Card number is require',
              maxLength: {
                value: 16,
                message: "Card number can't be exceed 16 number",
              },
              validate: (value) => (value[0] !== '4' || value[0] !== '5') && 'Card number invalid',
            }}
          />
          <Input
            name="name"
            control={control}
            label="Name"
            rules={{
              required: 'Name is require',
            }}
          />
          <XStack alignItems="center" space="$space.6">
            <Input
              label="Expires Dates"
              name="expiresDate"
              isShowError
              control={control}
              rules={{
                required: 'Expires Date is require',
              }}
              containerStyle={{ flex: 3 }}
            />
            <Input
              label="CVC"
              name="cvc"
              control={control}
              isShowError
              keyboardType="numeric"
              secureTextEntry
              rules={{
                required: 'CVC is require',
                maxLength: {
                  value: 3,
                  message: 'CVC too long',
                },
              }}
              containerStyle={{ flex: 2 }}
            />
          </XStack>
        </KeyboardAvoidingView>
      </YStack>
      <TabBar title="Add Credit Card" onPress={handleSubmit(handleSaveCardInfo)} />
    </>
  )
}

export default AddCard

import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { useForm } from 'react-hook-form'

import { ErrorMessage, Input, PaymentCard } from '@components'
import { IForm } from '@types'
import { containerStyles } from '@styles'

import styles from './styles'

const AddCard = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<IForm>()
  const observeFields = watch()

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <PaymentCard
          style={styles.cardSize}
          contentContainerStyle={styles.cardContent}
          cardNumber={observeFields.number || ''}
          cvc={observeFields.cvc || ''}
          expires={observeFields.expiresDate || ''}
          name={observeFields.name || ''}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.form}
      >
        <View>
          <Input
            name="number"
            keyboardType="numeric"
            control={control}
            label="Card Number"
            rules={{
              required: 'Card number is require',
              maxLength: {
                value: 16,
                message: "Card number can't be exceed 16 number",
              },
              validate: (value) => (value[0] !== '4' || value[0] !== '5') && 'Card number invalid',
            }}
          />
          <ErrorMessage style={styles.error} error={errors.number} />
        </View>
        <View>
          <Input
            name="name"
            control={control}
            label="Name"
            rules={{
              required: 'Name is require',
            }}
          />
          <ErrorMessage style={styles.error} error={errors.name} />
        </View>
        <View style={[containerStyles.inline, styles.spacing]}>
          <View style={styles.expiresDate}>
            <Input
              name="expiresDate"
              control={control}
              label="Expires Dates"
              rules={{
                required: 'Expires Date is require',
              }}
            />
            <ErrorMessage style={styles.error} error={errors.expiresDate} />
          </View>
          <View style={styles.cvc}>
            <Input
              name="cvc"
              control={control}
              keyboardType="numeric"
              secureTextEntry
              label="CVC"
              rules={{
                required: 'CVC is require',
                maxLength: {
                  value: 3,
                  message: 'CVC too long',
                },
              }}
            />
            <ErrorMessage style={styles.error} error={errors.cvc} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default AddCard

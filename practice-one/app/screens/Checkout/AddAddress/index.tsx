import { useCallback } from 'react'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { useForm } from 'react-hook-form'

import { Button, ErrorMessage, Input } from '@components'
import { IForm } from '@types'

import styles from './styles'

const AddAddress = () => {
  const {
    control,
    formState: { errors },
  } = useForm<IForm>()
  const handlePress = useCallback(() => undefined, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        titleStyle={styles.btnTitle}
        variant="quaternary"
        title="Use current location"
        leftIcon={require('@assets/location.png')}
        onPress={handlePress}
      />
      <KeyboardAvoidingView style={styles.form}>
        <View>
          <Input
            name="name"
            control={control}
            label="Name"
            rules={{ required: 'Please enter name of location' }}
          />
          <ErrorMessage error={errors.name} style={styles.error} />
        </View>
        <View>
          <Input
            name="phone"
            control={control}
            label="Phone"
            rules={{ required: 'Please enter name of location' }}
          />
          <ErrorMessage error={errors.phone} style={styles.error} />
        </View>
        <View>
          <Input
            name="streetAddress"
            control={control}
            label="Street address"
            rules={{ required: 'Please enter your address' }}
          />
          <ErrorMessage error={errors.streetAddress} style={styles.error} />
        </View>
        <View>
          <Input
            name="state"
            control={control}
            label="State"
            rules={{ required: 'Please enter state' }}
          />
          <ErrorMessage error={errors.state} style={styles.error} />
        </View>
        <View>
          <Input
            name="zipCode"
            control={control}
            label="Zipcode"
            rules={{ required: 'Please provide zipcode' }}
          />
          <ErrorMessage error={errors.zipCode} style={styles.error} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default AddAddress

import { Alert, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS } from '@constants'

import styles from './styles'

const SignUp = () => {
  const { control, handleSubmit } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Heading content="Welcome to tradly" textMedium />
        <Paragraph content="Signup to your account" size="md" />
      </View>
      <View style={styles.form}>
        <Input
          name="firstName"
          control={control}
          placeholder="First Name"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: 'First Name is required',
          }}
        />
        <Input
          name="lastName"
          control={control}
          placeholder="Last Name"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: 'Last Name is required',
          }}
        />
        <Input
          name="email"
          control={control}
          placeholder="Email/Mobile Number"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: 'Enter email or mobile number',
          }}
        />
        <Input
          name="password"
          secureTextEntry
          control={control}
          placeholder="Password"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: 'Password is required',
          }}
        />
        <Input
          name="password"
          secureTextEntry
          control={control}
          placeholder="Re-enter password"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: 'Password is required',
          }}
        />
      </View>
      <Button
        style={styles.btn}
        title="create"
        variant="secondary"
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.info}>
        <Paragraph size="lg" content="Have an account?" />
        <TouchableOpacity>
          <Paragraph style={styles.signInBtn} size="lg" content="Sign in" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

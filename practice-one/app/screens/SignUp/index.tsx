import { useCallback } from 'react'
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, ErrorMessage, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS } from '@constants'

import styles from './styles'

export interface SignUpScreenProps extends NativeStackScreenProps<RootStackParamList, 'SignUp'> {}

const SignUp = ({ navigation }: SignUpScreenProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>()
  const observePassword: string = watch('password')
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }
  const handleToLoginScreen = useCallback(() => navigation.navigate('Login'), [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Heading content="Welcome to tradly" textMedium />
        <Paragraph content="Signup to your account" size="md" />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View>
          <Input
            name="firstName"
            control={control}
            placeholder="First Name"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'First Name is required',
            }}
          />
          <ErrorMessage error={errors.firstName} />
        </View>
        <View>
          <Input
            name="lastName"
            control={control}
            placeholder="Last Name"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'Last Name is required',
            }}
          />
          <ErrorMessage error={errors.lastName} />
        </View>
        <View>
          <Input
            name="email"
            control={control}
            placeholder="Email/Mobile Number"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'Enter email or mobile number',
            }}
          />
          <ErrorMessage error={errors.email} />
        </View>
        <View>
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
          <ErrorMessage error={errors.password} />
        </View>
        <View>
          <Input
            name="confirmPassword"
            secureTextEntry
            control={control}
            placeholder="Re-enter password"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'Re-enter password is required',
              validate: (value) => value === observePassword || 'Oops! Password not match',
            }}
          />
          <ErrorMessage error={errors.confirmPassword} />
        </View>
      </KeyboardAvoidingView>
      <Button
        style={styles.btn}
        title="create"
        variant="secondary"
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.info}>
        <Paragraph size="lg" content="Have an account?" />
        <TouchableOpacity onPress={handleToLoginScreen}>
          <Paragraph style={styles.signInBtn} size="lg" content="Sign in" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

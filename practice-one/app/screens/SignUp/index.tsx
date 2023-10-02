import { useCallback } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, ErrorMessage, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS, ERROR_MESSAGES } from '@constants'

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
              required: ERROR_MESSAGES.FIRST_NAME.REQUIRED,
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
              required: ERROR_MESSAGES.LAST_NAME.REQUIRED,
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
              required: ERROR_MESSAGES.ACCOUNT.REQUIRED,
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
              required: ERROR_MESSAGES.PASSWORD.REQUIRED,
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
              required: ERROR_MESSAGES.CONFIRM_PASS.REQUIRED,
              validate: (value) => value === observePassword || ERROR_MESSAGES.CONFIRM_PASS.MATCH,
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
        <Button
          style={styles.signInBtn}
          titleStyle={styles.btnTitle}
          title="Sign in"
          variant="tertiary"
          onPress={handleToLoginScreen}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUp

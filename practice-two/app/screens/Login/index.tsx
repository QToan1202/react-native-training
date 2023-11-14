import { useCallback } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS, ERROR_MESSAGES } from '@constants'
import { containerStyles } from '@styles'

import styles from './styles'

export interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList, 'Login'> {}

const Login = ({ navigation }: LoginScreenProps) => {
  const { control, handleSubmit } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }
  const handleToSignUpScreen = useCallback(() => navigation.navigate('SignUp'), [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Heading textMedium content="Welcome to tradly" />
        <Paragraph size="md" content="Login to your account" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.input}
      >
        <Input
          name="email"
          isShowError
          control={control}
          placeholder="Email/Mobile Number"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: ERROR_MESSAGES.ACCOUNT.REQUIRED,
          }}
        />
        <Input
          name="password"
          isShowError
          secureTextEntry
          control={control}
          placeholder="Password"
          placeholderTextColor={COLORS.WHITE}
          rules={{
            required: ERROR_MESSAGES.PASSWORD.REQUIRED,
          }}
        />
      </KeyboardAvoidingView>
      <Button
        style={styles.loginBtn}
        title="login"
        variant="secondary"
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.info}>
        <Paragraph size="lg" content="Forgot your password?" />
        <View style={containerStyles.inline}>
          <Paragraph size="lg" content="Don't have an account?" />
          <Button
            style={styles.btn}
            titleStyle={styles.signUpBtn}
            title="Sign up"
            variant="tertiary"
            onPress={handleToSignUpScreen}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

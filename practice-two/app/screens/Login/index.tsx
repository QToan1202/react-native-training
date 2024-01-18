import { useCallback, useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'
import { Button, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS, ERROR_MESSAGES } from '@constants'
import { useLogin } from '@hooks'
import { asyncStoreService } from '@services'
import { useAuthStore } from '@stores'

import styles from './styles'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: LoginScreenProps) => {
  const { mutate, data: user, isSuccess, status } = useLogin(process.env.USER_ENDPOINT)
  const loginFn = useAuthStore((state) => state.login)
  const { control, handleSubmit } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = useCallback(({ email, password }: IForm) => {
    mutate({
      email,
      password,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleSaveUser = useCallback(async () => {
    if (!isSuccess) return

    await asyncStoreService.save('user', user, () => loginFn(user))
  }, [isSuccess, loginFn, user])

  useEffect(() => {
    handleSaveUser()
  }, [handleSaveUser])

  const handleToSignUpScreen = useCallback(() => navigation.navigate('SignUp'), [navigation])
  return (
    <SafeAreaView style={styles.container}>
      <YStack space="$space.9" alignItems="center">
        <Heading content="Welcome to tradly" fontWeight="$2" letterSpacing="$2" />
        <Paragraph content="Login to your account" fontSize="$2" letterSpacing="$4" />
      </YStack>
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
        marginBottom="$space.6"
        title="login"
        variant="secondary"
        isDisable={status === 'pending'}
        onPress={handleSubmit(onSubmit)}
      />
      <YStack alignItems="center" space="$space.8">
        <Paragraph content="Forgot your password?" fontSize="$3" lineHeight="$4" />
        <XStack alignItems="center" columnGap="$space.1.5">
          <Paragraph content="Don't have an account?" fontSize="$3" lineHeight="$4" />
          <Button
            variant="tertiary"
            borderColor="$color.transparent"
            fontWeight="$3"
            fontSize="$3"
            lineHeight="$4"
            textTransform="none"
            title="Sign up"
            onPress={handleToSignUpScreen}
          />
        </XStack>
      </YStack>
    </SafeAreaView>
  )
}

export default Login

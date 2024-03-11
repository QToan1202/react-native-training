import { useCallback, useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { XStack, YStack } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Heading, Input, Paragraph } from '@practice-two/shared/components'
import { IForm, RootStackParamList } from '@practice-two/shared/types'
import { COLORS, ERROR_MESSAGES } from '@practice-two/shared/constants'
import { asyncStoreService } from '@practice-two/shared/services'
import { useAuthStore } from '@practice-two/shared/stores'
import { Feature } from '@practice-two/shared/hocs'

import { useLogin } from '../../hooks'

import styles from './styles'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: LoginScreenProps) => {
  const { mutate, data: user, isSuccess, status } = useLogin(process.env.USER_ENDPOINT)
  const setUser = useAuthStore((state) => state.setUser)
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

    await asyncStoreService.save('user', user, () => setUser(user))
  }, [isSuccess, setUser, user])

  useEffect(() => {
    handleSaveUser()
  }, [handleSaveUser])

  const handleToSignUpScreen = useCallback(() => navigation.navigate('SignUp'), [navigation])

  return (
    <Feature feat="login">
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
    </Feature>
  )
}

export default Login
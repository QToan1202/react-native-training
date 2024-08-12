import { H2, Separator, Square, XStack, YStack, isWeb } from 'tamagui'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { redirect } from 'react-router-dom'
import { AxiosError } from 'axios'

import { Button, Checkbox, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TLoginForm } from '@shared/types'

import { Apple, Facebook, Google, Lock, Logo, User } from '../../assets/images'
import useLogin from '../../hooks/useLogin'
import { LOGIN_FORM, LOGIN_FORM_DEFAULT_VALUES } from '../../constants'

type LoginScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'Login'>>

const Login = ({ navigation }: LoginScreenProps) => {
  const { mutate: mutateLogin } = useLogin('/users')
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm<TLoginForm>({
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
  })
  const handleOnSubmit: SubmitHandler<TLoginForm> = (data) => {
    mutateLogin(data, {
      onError: (error) => {
        if (error instanceof AxiosError && error.code === 'ERR_NETWORK') {
          return
        }

        resetField('password')
      },
      onSuccess: () => reset(),
    })
  }
  const handleMoveToRegister = () =>
    isWeb ? redirect('/register') : navigation?.navigate('Register')

  return (
    <YStack
      gap={5}
      paddingHorizontal={36}
      justifyContent="center"
      backgroundColor="$white"
      fullscreen
    >
      <Square alignItems="center">
        <Logo />
      </Square>

      <YStack marginTop="$6" alignItems="center" gap={10}>
        <H2 color="$primary">Welcome back to E&#45;com&#33;</H2>
        <Text color="$gray_100">Sign in to continue</Text>
      </YStack>

      <Form
        formControlProp={control}
        onSubmit={handleSubmit(handleOnSubmit)}
        gap={10}
        marginTop="$12"
      >
        <Controller
          name={LOGIN_FORM.ACCOUNT.label}
          control={control}
          rules={LOGIN_FORM.ACCOUNT.rules}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              startIcon={(color) => <User stroke={color} />}
              placeholder={LOGIN_FORM.ACCOUNT.placeholder}
              isError={!!errors.account}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          name={LOGIN_FORM.PASSWORD.label}
          control={control}
          rules={LOGIN_FORM.PASSWORD.rules}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              startIcon={(color) => <Lock stroke={color} />}
              placeholder={LOGIN_FORM.PASSWORD.placeholder}
              isError={!!errors.password}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <YStack>
          <Text color="$primary" fontWeight="bold" fontSize="$1" textAlign="right">
            Forgot Password&#63;
          </Text>
          <Checkbox label="Remember Me" />
        </YStack>
        <Form.Trigger asChild="web">
          <Button
            title="login"
            borderRadius={5}
            isDisable={!isDirty || !isValid}
            loading={isSubmitting}
          />
        </Form.Trigger>
      </Form>

      <Separator position="relative" marginVertical={15} alignItems="center" borderColor="$border">
        <Text
          position="absolute"
          top={-8}
          backgroundColor="$white"
          paddingHorizontal={20}
          textTransform="uppercase"
          color="$gray_100"
          fontSize="$2"
          fontWeight="bold"
        >
          Or
        </Text>
      </Separator>

      <YStack marginTop="$5" alignItems="center" gap="$5">
        <Text fontSize={15}>Login using</Text>

        <XStack gap="$6">
          <Apple />
          <Facebook />
          <Google />
        </XStack>

        <YStack marginTop="$7">
          <Text color="$gray_100" fontSize="$1" letterSpacing={0.5}>
            Don&#39;t have an account&#63;{' '}
            <Text
              color="$primary"
              tag="span"
              hoverStyle={{
                cursor: 'pointer',
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}
              $platform-web={{ fontWeight: 'bold' }}
              $platform-native={{ fontWeight: '700' }}
              onPress={handleMoveToRegister}
            >
              Register
            </Text>
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Login

import { H2, Separator, Square, XStack, YStack } from 'tamagui'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'
import { useToastController } from '@tamagui/toast'

import { Button, Checkbox, Form, Input, Text } from '@practice-three/shared/ui'
import { AuthStackScreenProps, TLoginForm, TUser } from '@practice-three/shared/types'

import { Apple, Facebook, Google, Lock, Logo, User } from '../../assets/images'
import { useLogin } from '../../hooks'
import { LOGIN_FORM, LOGIN_FORM_DEFAULT_VALUES } from '../../constants'

type LoginScreenProps = AuthStackScreenProps<'Login'>

const Login = ({ navigation }: LoginScreenProps) => {
  const toast = useToastController()
  const { mutate: mutateLogin, isPending: isLoginUser } = useLogin('/users')
  const {
    control,
    handleSubmit,
    reset,
    resetField,
    formState: { isDirty, isValid, errors },
  } = useForm<TLoginForm>({
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
  })
  const handleOnSubmit: SubmitHandler<TLoginForm> = (data) => {
    mutateLogin(data, {
      onError: (error) => {
        if (error instanceof AxiosError && error.code === 'ERR_NETWORK') return
        toast.show('Login fail!!!', {
          message: error.message || 'Login unsuccessful. Please try again!',
        })
        resetField('password')
      },
      onSuccess: ({ name }: TUser) => {
        reset()
        toast.show('Login success!!!', {
          message: `Welcome back ${name}`,
        })
      },
    })
  }
  const handleMoveToRegister = () => navigation.navigate('Register')

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
              startIcon={(color) => <User fill={color} />}
              placeholder={LOGIN_FORM.ACCOUNT.placeholder}
              isError={!!errors.account}
              disabled={isLoginUser}
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
              startIcon={(color) => <Lock fill={color} />}
              placeholder={LOGIN_FORM.PASSWORD.placeholder}
              secureTextEntry
              isError={!!errors.password}
              disabled={isLoginUser}
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
            loading={isLoginUser}
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

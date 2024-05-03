import { H2, Separator, Square, XStack, YStack, isWeb } from 'tamagui'
import { SubmitHandler } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigate } from 'react-router-dom'

import { Button, Checkbox, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TLoginForm } from '@shared/types'

import { Apple, Facebook, Google, Lock, Logo, User } from '../../assets/images'
import useLogin from '../../hooks/useLogin'
import { VALIDATION_RULES } from '../../constants'

type LoginScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'Login'>>

const Login = ({ navigation }: LoginScreenProps) => {
  const { mutate: mutateLogin } = useLogin('/users')
  const navigate = useNavigate()
  const handleOnSubmit: SubmitHandler<TLoginForm> = (data) => {
    mutateLogin(data)
  }
  const handleMoveToRegister = () =>
    isWeb ? navigate('/register') : navigation?.navigate('Register')

  return (
    <YStack gap={5} paddingHorizontal={36}>
      <Square alignItems="center">
        <Logo />
      </Square>

      <YStack marginTop="$6" alignItems="center" gap={10}>
        <H2 color="$primary">Welcome back to E&#45;com&#33;</H2>
        <Text color="$gray_100">Sign in to continue</Text>
      </YStack>

      <Form onSubmit={handleOnSubmit} gap={10} marginTop="$12">
        <Input
          startIcon={<User />}
          label="account"
          placeholder="Your Email / Phone Number"
          options={VALIDATION_RULES.ACCOUNT}
        />

        <Input
          startIcon={<Lock />}
          label="password"
          placeholder="Password"
          secureTextEntry
          options={VALIDATION_RULES.PASSWORD}
        />

        <YStack>
          <Text color="$primary" fontWeight="bold" fontSize="$1" textAlign="right">
            Forgot Password&#63;
          </Text>
          <Checkbox label="Remember Me" />
        </YStack>
        <Form.Trigger asChild="web">
          <Button title="login" borderRadius={5} />
        </Form.Trigger>
      </Form>

      <Separator position="relative" marginVertical={15} alignItems="center" borderColor="$border">
        <Text
          position="absolute"
          top={-8}
          backgroundColor="$pure_white"
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

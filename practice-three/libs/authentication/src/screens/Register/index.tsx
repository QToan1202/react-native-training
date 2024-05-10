import { H2, Separator, Square, XStack, YStack, isWeb } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigate } from 'react-router-dom'

import { Button, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TRegisterForm } from '@shared/types'

import { Apple, Facebook, Google, Lock, Logo, Mail, User } from '../../assets/images'
import useRegister from '../../hooks/useRegister'
import { VALIDATION_RULES } from '../../constants'

type RegisterScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'Register'>>

const Register = ({ navigation }: RegisterScreenProps) => {
  const { mutate: mutateRegister } = useRegister('/users')
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<TRegisterForm>()
  const handleOnSubmit: SubmitHandler<TRegisterForm> = (data) => {
    mutateRegister(data)
  }
  const handleMoveToLogin = () => (isWeb ? navigate('/login') : navigation?.navigate('Login'))

  return (
    <YStack gap={5} paddingHorizontal={36}>
      <Square alignItems="center">
        <Logo />
      </Square>

      <YStack marginTop="$6" alignItems="center" gap={10}>
        <H2 color="$primary">Welcome back to E&#45;com&#33;</H2>
        <Text color="$gray_100">Let&#39;s make your account</Text>
      </YStack>

      <Form formControlProp={control} onSubmit={handleSubmit(handleOnSubmit)} gap={10}>
        <Input
          startIcon={<User />}
          label="name"
          placeholder="Name"
          options={VALIDATION_RULES.NAME}
        />
        <Input
          startIcon={<Mail />}
          label="account"
          placeholder="Your Email / Phone Number"
          options={VALIDATION_RULES.ACCOUNT}
        />
        <Input
          secureTextEntry
          startIcon={<Lock />}
          label="password"
          placeholder="Password"
          options={VALIDATION_RULES.PASSWORD}
        />
        <Input
          secureTextEntry
          startIcon={<Lock />}
          label="confirmPassword"
          placeholder="Confirm Password"
          options={VALIDATION_RULES.CONFIRMPASSWORD}
        />

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
            Already have an account&#63;{' '}
            <Text
              color="$primary"
              hoverStyle={{
                cursor: 'pointer',
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}
              $platform-web={{ fontWeight: 'bold' }}
              $platform-native={{ fontWeight: '700' }}
              onPress={handleMoveToLogin}
            >
              Log In
            </Text>
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Register

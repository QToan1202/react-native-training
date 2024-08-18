import { H2, Separator, Square, Stack, XStack, YStack, isWeb } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { redirect } from 'react-router-dom'

import { Button, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TRegisterForm } from '@shared/types'

import { Apple, Facebook, Google, Lock, Logo, Mail, User } from '../../assets/images'
import useRegister from '../../hooks/useRegister'
import { VALIDATION_RULES } from '../../constants'

type RegisterScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'Register'>>

const Register = ({ navigation }: RegisterScreenProps) => {
  const { mutate: mutateRegister } = useRegister('/users')
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<TRegisterForm>()
  const watchPassword = watch('password', '')
  const handleOnSubmit: SubmitHandler<TRegisterForm> = (data) => {
    mutateRegister(data, {
      onSuccess: () => reset(),
    })
  }
  const handleMoveToLogin = () => (isWeb ? redirect('/login') : navigation?.navigate('Login'))

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
        <Text color="$gray_100">Let&#39;s make your account</Text>
      </YStack>

      <Stack marginVertical={17}>
        {!!Object.keys(errors).length && (
          <Text color="$red_50" textAlign="center">
            {errors.confirmPassword?.message || 'You need to fill all information'}
          </Text>
        )}
      </Stack>

      <Form formControlProp={control} onSubmit={handleSubmit(handleOnSubmit)} gap={10}>
        <Input
          startIcon={(color) => <User stroke={color} />}
          label="name"
          placeholder="Name"
          isError={!!errors.name}
          options={VALIDATION_RULES.NAME}
        />
        <Input
          startIcon={(color) => <Mail stroke={color} />}
          label="account"
          placeholder="Your Email / Phone Number"
          isError={!!errors.account}
          options={VALIDATION_RULES.ACCOUNT}
        />
        <Input
          secureTextEntry
          startIcon={(color) => <Lock stroke={color} />}
          label="password"
          placeholder="Password"
          isError={!!errors.password}
          options={VALIDATION_RULES.PASSWORD}
        />
        <Input
          secureTextEntry
          startIcon={(color) => <Lock stroke={color} />}
          label="confirmPassword"
          placeholder="Confirm Password"
          isError={!!errors.confirmPassword}
          options={{
            ...VALIDATION_RULES.PASSWORD,
            ...{
              validate: (value: string) =>
                watchPassword === value || 'Your type in password do not match',
            },
          }}
        />

        <Form.Trigger asChild="web">
          <Button
            title="login"
            borderRadius={5}
            isDisable={!isDirty || !!Object.keys(errors).length}
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
            Already have an account&#63;{' '}
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

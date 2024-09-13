import { useId } from 'react'
import { AnimatePresence, H2, Separator, Square, Stack, XStack, YStack } from 'tamagui'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useToastController } from '@tamagui/toast'

import { Button, Form, Input, Text } from '@practice-three/shared/ui'
import { AuthStackScreenProps, TRegisterForm } from '@practice-three/shared/types'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { Apple, Facebook, Google, Logo } from '../../assets/images'
import { useRegister } from '../../hooks'
import { REGISTER_FORM, REGISTER_FORM_DEFAULT_VALUES } from '../../constants'

type RegisterScreenProps = AuthStackScreenProps<'Register'>

const Register = ({ navigation }: RegisterScreenProps) => {
  const toast = useToastController()
  const { mutate: mutateRegister, isPending: isRegistering } = useRegister(ENDPOINTS.USER)
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<TRegisterForm>({
    defaultValues: REGISTER_FORM_DEFAULT_VALUES,
  })
  const handleOnSubmit: SubmitHandler<TRegisterForm> = (data) => {
    mutateRegister(data, {
      onSuccess: () => {
        reset()
        toast.show('Register success!!!', {
          message: 'Welcome to E-com',
        })
      },
      onError: (error: Error) => {
        toast.show('Register fail!!!', {
          message: error.message,
        })
      },
    })
  }
  const handleMoveToLogin = () => navigation.navigate('Login')
  const errorMessagesId = useId()

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

      <Form
        formControlProp={control}
        onSubmit={handleSubmit(handleOnSubmit)}
        gap={10}
        paddingTop={40}
      >
        <Stack position="absolute" top={0} left={0} right={0}>
          <AnimatePresence>
            {!!Object.keys(errors).length && (
              <Text
                key={errorMessagesId}
                animation="medium"
                enterStyle={{
                  x: 20,
                  opacity: 0,
                }}
                exitStyle={{
                  x: -20,
                  opacity: 0,
                }}
                color="$red_50"
                textAlign="center"
              >
                {errors.account?.message ||
                  errors.password?.message ||
                  errors.confirmPassword?.message ||
                  'You need to fill all information'}
              </Text>
            )}
          </AnimatePresence>
        </Stack>
        {Object.keys(REGISTER_FORM).map((key: string) => {
          const covertKey = key as keyof typeof REGISTER_FORM
          const inputLabel = REGISTER_FORM[covertKey].label

          return (
            <Controller
              key={covertKey}
              control={control}
              name={inputLabel}
              rules={
                inputLabel !== 'confirmPassword'
                  ? REGISTER_FORM[covertKey].rules
                  : {
                      validate: (value: string) =>
                        watch('password') === value || 'Your type in password do not match',
                    }
              }
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  secureTextEntry={inputLabel === 'confirmPassword' || inputLabel === 'password'}
                  startIcon={REGISTER_FORM[covertKey].startIcon}
                  placeholder={REGISTER_FORM[covertKey].placeholder}
                  isError={!!errors.name}
                  value={value}
                  disabled={isRegistering}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          )
        })}

        <Form.Trigger asChild="web">
          <Button
            title="login"
            borderRadius={5}
            isDisable={!isDirty || !!Object.keys(errors).length}
            loading={isSubmitting || isRegistering}
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

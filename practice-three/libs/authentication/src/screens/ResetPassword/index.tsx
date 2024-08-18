import { SubmitHandler, useForm } from 'react-hook-form'
import { H2, Square, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TRegisterForm } from '@shared/types'

import { Lock, Logo } from '../../assets/images'

type RegisterScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'ResetPassword'>>

const ResetPassword = ({ navigation }: RegisterScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<Pick<TRegisterForm, 'password' | 'confirmPassword'>>()
  const handleOnSubmit: SubmitHandler<Pick<TRegisterForm, 'password' | 'confirmPassword'>> = (
    data
  ) => {
    console.log(data)
  }

  return (
    <YStack paddingHorizontal={36} justifyContent="center" gap={5} fullscreen>
      <Square alignItems="center">
        <Logo />
      </Square>

      <YStack marginTop="$5" marginBottom="$8" alignItems="center" gap={10}>
        <H2 color="$primary" textTransform="capitalize">
          Forgot password
        </H2>
        <Text color="$gray_100" textAlign="center">
          Set new password for your account
        </Text>
      </YStack>

      <Form formControlProp={control} onSubmit={handleSubmit(handleOnSubmit)} gap={10}>
        <Input startIcon={<Lock />} label="password" placeholder="Password" />
        <Input startIcon={<Lock />} label="confirmPassword" placeholder="Confirm Password" />

        <Form.Trigger asChild="web">
          <Button
            title="send verification"
            borderRadius={5}
            isDisable={!isDirty || !isValid}
            loading={isSubmitting}
          />
        </Form.Trigger>
      </Form>
    </YStack>
  )
}

export default ResetPassword

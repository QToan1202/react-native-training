import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { H2, Square, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button, Form, Input, Text } from '@practice-three/components'
import { AuthenticationStack, TFormValues } from '@practice-three/types'

import { Logo, User } from '../../assets/images'

type ForgotPasswordScreenProps = Partial<
  NativeStackScreenProps<AuthenticationStack, 'ForgotPassword'>
>

const ForgotPassword = ({ navigation }: ForgotPasswordScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<Pick<TFormValues, 'account'>>()
  const handleOnSubmit: SubmitHandler<Pick<TFormValues, 'account'>> = (data) => {
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
          &#42; We will send you a message to set or reset your new password
        </Text>
      </YStack>

      <Form formControlProp={control} onSubmit={handleSubmit(handleOnSubmit)} gap={42}>
        <Controller
          name="account"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder="Your Email / Phone Number"
              startIcon={<User />}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

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

export default ForgotPassword

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { H2, Square, YStack } from 'tamagui'

import { Button, Form, Input, Text } from '@practice-three/components'
import { AuthStackScreenProps, TResetPassword } from '@practice-three/types'

import { Lock, Logo } from '../../assets/images'
import { RESET_PASSWORD_FORM, RESET_PASSWORD_FORM_DEFAULT_VALUES } from '../../constants'

type RegisterScreenProps = Partial<AuthStackScreenProps<'ResetPassword'>>

const ResetPassword = ({ navigation }: RegisterScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm<TResetPassword>({
    defaultValues: RESET_PASSWORD_FORM_DEFAULT_VALUES,
  })
  const handleOnSubmit: SubmitHandler<TResetPassword> = (data) => {
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
        <Controller
          name={RESET_PASSWORD_FORM.PASSWORD.label}
          control={control}
          rules={RESET_PASSWORD_FORM.PASSWORD.rules}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              startIcon={<Lock />}
              placeholder={RESET_PASSWORD_FORM.PASSWORD.placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          name={RESET_PASSWORD_FORM.CONFIRM_PASSWORD.label}
          control={control}
          rules={RESET_PASSWORD_FORM.CONFIRM_PASSWORD.rules}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              startIcon={<Lock />}
              placeholder={RESET_PASSWORD_FORM.CONFIRM_PASSWORD.placeholder}
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

export default ResetPassword

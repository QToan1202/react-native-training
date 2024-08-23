import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { H2, YStack } from 'tamagui'

import { Button, Form, Input, Text } from '@practice-three/components'
import { AuthStackScreenProps, TFormValues } from '@practice-three/types'

type VerificationScreenProps = Partial<AuthStackScreenProps<'Verification'>>

const Verification = ({ navigation }: VerificationScreenProps) => {
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
      <YStack marginTop="$5" marginBottom="$8" alignItems="center" gap={10}>
        <H2 color="$primary" textTransform="capitalize">
          enter verification code
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
              placeholder="Enter OTP here"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Form.Trigger asChild="web">
          <Button
            title="confirm"
            borderRadius={5}
            isDisable={!isDirty || !isValid}
            loading={isSubmitting}
          />
        </Form.Trigger>
      </Form>
    </YStack>
  )
}

export default Verification

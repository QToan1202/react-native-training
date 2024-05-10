import { SubmitHandler, useForm } from 'react-hook-form'
import { H2, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Button, Form, Input, Text } from '@shared/components'
import { AuthenticationStack, TFormValues } from '@shared/types'

type VerificationScreenProps = Partial<NativeStackScreenProps<AuthenticationStack, 'Verification'>>

const Verification = ({ navigation }: VerificationScreenProps) => {
  const { control, handleSubmit } = useForm<Pick<TFormValues, 'account'>>()
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
        <Input label="account" placeholder="Enter OTP here" />

        <Form.Trigger asChild="web">
          <Button title="confirm" borderRadius={5} />
        </Form.Trigger>
      </Form>
    </YStack>
  )
}

export default Verification

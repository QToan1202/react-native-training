import { SubmitHandler } from 'react-hook-form'
import { H2, Square, YStack } from 'tamagui'

import { Button, Form, Input, Text } from '@shared/components'
import { TFormValues } from '@shared/types'

import { Logo, User } from '../../assets/images'

const ForgotPassword = () => {
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

      <Form onSubmit={handleOnSubmit} gap={42}>
        <Input startIcon={<User />} label="account" placeholder="Your Email / Phone Number" />

        <Form.Trigger asChild="web">
          <Button title="send verification" borderRadius={5} />
        </Form.Trigger>
      </Form>
    </YStack>
  )
}

export default ForgotPassword

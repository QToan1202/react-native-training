import { SubmitHandler } from 'react-hook-form'
import { H2, Square, YStack } from 'tamagui'

import { Button, Form, Input, Text } from '@shared/components'
import { TRegisterForm } from '@shared/types'

import { Lock, Logo } from '../../assets/images'

const ResetPassword = () => {
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

      <Form onSubmit={handleOnSubmit} gap={10}>
        <Input startIcon={<Lock />} label="password" placeholder="Password" />
        <Input startIcon={<Lock />} label="confirmPassword" placeholder="Confirm Password" />

        <Form.Trigger asChild="web">
          <Button title="send verification" borderRadius={5} />
        </Form.Trigger>
      </Form>
    </YStack>
  )
}

export default ResetPassword

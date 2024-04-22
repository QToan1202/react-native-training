import { H2, Heading, Image, Separator, View, XStack, YStack } from 'tamagui'
import { SubmitHandler } from 'react-hook-form'

import { Button, Checkbox, Form, Input, Text } from '@shared/components'
import { TRegisterForm } from '@shared/types'

import Facebook from '../../assets/images/facebook.svg'
import Apple from '../../assets/images/apple.svg'
import Google from '../../assets/images/google.svg'

const Login = () => {
  const handleOnSubmit: SubmitHandler<TRegisterForm> = (data) => {
    console.log(data)
  }

  return (
    <View>
      <YStack gap={5} paddingHorizontal={36}>
        <YStack alignItems="center" gap={10}>
          <H2 color="$primary">Welcome back to E&#45;com&#33;</H2>
          <Text color="$gray_100">Sign in to continue</Text>
        </YStack>

        <Form onSubmit={handleOnSubmit} gap={10}>
          <Input label="email" placeholder="Your Email / Phone Number" />
          <Input label="password" placeholder="Password" secureTextEntry />

          <YStack>
            <Text color="$primary" fontWeight="bold" fontSize="$1" textAlign="right">
              Forgot Password&#63;
            </Text>
            <Checkbox label="Remember Me" />
          </YStack>
          <Form.Trigger asChild="web">
            <Button title="login" borderRadius={5} />
          </Form.Trigger>
        </Form>

        <Separator
          position="relative"
          marginVertical={15}
          alignItems="center"
          borderColor="$border"
        >
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

        <Text>Login using</Text>
      </YStack>
    </View>
  )
}

export default Login

import { H2, Separator, XStack, YStack } from 'tamagui'
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

      <Separator position="relative" marginVertical={15} alignItems="center" borderColor="$border">
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

      <YStack marginTop="$5" alignItems="center" gap="$5">
        <Text fontSize={15}>Login using</Text>

        <XStack gap="$6">
          <img alt="ap" src={Apple} />
          <img alt="fb" src={Facebook} />
          <img alt="gg" src={Google} />
        </XStack>

        <YStack marginTop="$7">
          <Text color="$gray_100" fontSize="$1" letterSpacing={0.5}>
            Don&#39;t have an account&#63;{' '}
            <Text
              color="$primary"
              hoverStyle={{
                cursor: 'pointer',
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}
              $platform-web={{ fontWeight: 'bold' }}
              $platform-native={{ fontWeight: '700' }}
            >
              Register
            </Text>
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Login

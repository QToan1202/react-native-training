import { H2, Separator, XStack, YStack } from 'tamagui'
import { SubmitHandler } from 'react-hook-form'

import { Button, Form, Input, Text } from '@shared/components'
import { TRegisterForm } from '@shared/types'

import Facebook from '../../assets/images/facebook.svg'
import Apple from '../../assets/images/apple.svg'
import Google from '../../assets/images/google.svg'

const Register = () => {
  const handleOnSubmit: SubmitHandler<TRegisterForm> = (data) => {
    console.log(data)
  }

  return (
    <YStack gap={5} paddingHorizontal={36}>
      <YStack alignItems="center" gap={10}>
        <H2 color="$primary">Welcome back to E&#45;com&#33;</H2>
        <Text color="$gray_100">Let&#39;s make your account</Text>
      </YStack>

      <Form onSubmit={handleOnSubmit} gap={10}>
        <Input label="name" placeholder="Name" />
        <Input label="account" placeholder="Your Email / Phone Number" />
        <Input label="password" placeholder="Password" />
        <Input label="confirmPassword" placeholder="Confirm Password" secureTextEntry />

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
            Already have an account&#63;{' '}
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
              Log In
            </Text>
          </Text>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Register

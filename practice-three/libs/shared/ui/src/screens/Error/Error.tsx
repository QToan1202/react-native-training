import { FallbackProps } from 'react-error-boundary'
import { getTokenValue, Square, styled, YStack } from 'tamagui'

import { Computer } from '@practice-three/shared/asset'

import { Heading, Text as BaseText, Button } from '../../components'

export type ErrorPageProps = FallbackProps

const Text = styled(BaseText, { fontSize: 16 })

const Error = ({ error, resetErrorBoundary }: FallbackProps) => (
  <YStack
    justifyContent="center"
    alignItems="center"
    gap={14}
    flex={1}
    padding={30}
    backgroundColor="$white"
  >
    <YStack gap={45}>
      <Square>
        <Computer width={300} height={300} fill={getTokenValue('$gray_100')} />
      </Square>
      <Heading tag="h1" color="$pure_black" fontSize={40} fontWeight="700" letterSpacing={0.5}>
        Oops! Something went wrong.
      </Heading>
    </YStack>
    <YStack gap={10} $md={{ maxWidth: 700 }}>
      <Text>
        We encountered an unexpected error while processing your request. Please try refreshing the
        page, checking your internet connection, or clearing your browser's cache and cookies. If
        the problem persists, you may need to{' '}
        <Text tag="span" color="$primary" cursor="pointer" textDecorationLine="underline">
          contact our support team
        </Text>{' '}
        for further assistance.
      </Text>
      {error?.message && (
        <Text>
          Technical details: <Text color="$red_100">{error?.message}</Text>
        </Text>
      )}
    </YStack>
    <Button
      alignSelf="center"
      marginTop={25}
      paddingVertical={10}
      paddingHorizontal={20}
      fontSize="$3"
      title="try again"
      onPress={resetErrorBoundary}
    />
  </YStack>
)

export default Error

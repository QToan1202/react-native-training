import { Toast as TToast, ToastProps as TToastProps, useToastState } from '@tamagui/toast'
import { Heading, YStack } from 'tamagui'
import { Text } from '../Text'

export type ToastProps = TToastProps

const DEFAULT_TOAST_DURATION = 3 * 1000

const Toast = ({ ...rest }: ToastProps) => {
  const currentToast = useToastState()

  if (!currentToast || currentToast.isHandledNatively) return null

  return (
    <TToast
      key={currentToast.id}
      duration={currentToast.duration || DEFAULT_TOAST_DURATION}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      y={10}
      animation="quick"
      viewportName={currentToast.viewportName}
      backgroundColor="$white"
      {...rest}
    >
      <YStack gap="$2">
        <TToast.Title textAlign="center">
          <Heading color="$primary" fontWeight="700" fontSize="$4">
            {currentToast.title}
          </Heading>
        </TToast.Title>
        {!!currentToast.message && (
          <TToast.Description>
            <Text color="$primary">{currentToast.message}</Text>
          </TToast.Description>
        )}
      </YStack>
    </TToast>
  )
}

export default Toast

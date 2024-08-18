import {
  AlertDialog as TAlertDialog,
  AlertDialogProps as TAlertDialogProps,
  XStack,
  YStack,
} from 'tamagui'
import { Button } from '../Button'

export type AlertDialogProps = TAlertDialogProps & {
  title: string
  description: string
  onSuccess?: () => void
  onCancel?: () => void
}

const AlertDialog = ({ title, description, onSuccess, onCancel, ...rest }: AlertDialogProps) => {
  return (
    <TAlertDialog native {...rest}>
      <TAlertDialog.Portal>
        <TAlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <TAlertDialog.Content
          aria-describedby="desc"
          elevate
          borderWidth={0}
          key="content"
          animation="quick"
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          backgroundColor="$white"
        >
          <YStack gap={12}>
            <TAlertDialog.Title color="$black">{title}</TAlertDialog.Title>
            <TAlertDialog.Description id="desc" color="$black">
              {description}
            </TAlertDialog.Description>

            <XStack gap="$3" justifyContent="flex-end">
              <TAlertDialog.Cancel asChild>
                <Button
                  title="Cancel"
                  onPress={onCancel}
                  variant="outlined"
                  paddingHorizontal={18}
                  paddingVertical={12}
                />
              </TAlertDialog.Cancel>

              <TAlertDialog.Action asChild>
                <Button
                  title="Accept"
                  onPress={onSuccess}
                  paddingHorizontal={18}
                  paddingVertical={12}
                />
              </TAlertDialog.Action>
            </XStack>
          </YStack>
        </TAlertDialog.Content>
      </TAlertDialog.Portal>
    </TAlertDialog>
  )
}

export default AlertDialog

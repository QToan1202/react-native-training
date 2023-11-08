import { AlertDialog, AlertDialogProps, Button, XStack, YStack } from "tamagui";

const CustomAlert = (props: AlertDialogProps) => (
  <AlertDialog {...props}>
    <AlertDialog.Trigger asChild>
      <Button>Click here</Button>
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
      <AlertDialog.Overlay key="overlay" opacity={0.7} />
      <AlertDialog.Content key="content" w="80%">
        <YStack space>
          <AlertDialog.Title>React Native</AlertDialog.Title>
          <AlertDialog.Description>Pressing yes, pls</AlertDialog.Description>

          <XStack space jc={"flex-end"}>
            <AlertDialog.Cancel asChild>
              <Button>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button backgroundColor={"$blue10"} color={"white"}>
                Yes
              </Button>
            </AlertDialog.Action>
          </XStack>
        </YStack>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog>
);

export default CustomAlert;

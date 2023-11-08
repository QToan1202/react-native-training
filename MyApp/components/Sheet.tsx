import { ChevronDown } from "@tamagui/lucide-icons";
import { Button, Paragraph, Sheet, SheetProps } from "tamagui";

const CustomSheet = ({ onOpenChange, ...props }: SheetProps) => {
  const handleClose = () => onOpenChange?.(false);

  return (
    <Sheet
      modal
      snapPointsMode="fit"
      dismissOnSnapToBottom
      onOpenChange={onOpenChange}
      {...props}
    >
      <Sheet.Overlay opacity={0.7} />
      <Sheet.Handle />
      <Sheet.Frame f={1} jc="center" ai="center" p={"$4"} space={"$4"}>
        <Paragraph>
          Eu officia sunt ipsum nisi dolore labore est laborum laborum in esse
          ad pariatur. Dolor excepteur esse deserunt voluptate labore ea.
          Exercitation ipsum deserunt occaecat cupidatat consequat est
          adipisicing velit cupidatat ullamco veniam aliquip reprehenderit
          officia. Officia labore culpa ullamco velit. In sit occaecat velit
          ipsum fugiat esse aliqua dolor sint.
        </Paragraph>
        <Button
          variant="outlined"
          circular
          icon={ChevronDown}
          onPress={handleClose}
        />
      </Sheet.Frame>
    </Sheet>
  );
};

export default CustomSheet;

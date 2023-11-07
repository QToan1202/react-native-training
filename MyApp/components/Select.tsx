import { useMemo, useState } from "react";
import { Adapt, Select, SelectProps, Sheet } from "tamagui";
import items from "../constants/items";
import { Check, ChevronDown } from "@tamagui/lucide-icons";

const CustomSelect = (props: SelectProps) => {
  const [value, setValue] = useState(items[0].name);

  return (
    <Select value={value} onValueChange={setValue} {...props}>
      <Select.Trigger width={220} iconAfter={ChevronDown}>
        <Select.Value placeholder="Select a value" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native={!!props.native} modal>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {useMemo(
              () =>
                items.map(({ name }, i) => (
                  <Select.Item index={i} key={name} value={name.toLowerCase()}>
                    <Select.ItemText>{name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )),
              []
            )}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
};

export default CustomSelect;

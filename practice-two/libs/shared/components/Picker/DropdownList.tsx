import { useCallback } from 'react'
import { Stack, StackProps } from 'tamagui'
import { FlatList, ListRenderItem } from 'react-native'

import { IDropDownItem } from '@types'
import Button from '@components/Button'

export type DropDownListProps<T> = StackProps & {
  listData: T[]
  onSelect: (item: T) => void
}

const DropdownList = <T extends IDropDownItem>({
  listData,
  onSelect,
  ...rest
}: DropDownListProps<T>) => {
  const renderItem: ListRenderItem<T> = useCallback(
    ({ item }) => {
      const handleSetSelectItem = () => onSelect(item)

      return (
        <Button
          title={item.value}
          variant="tertiary"
          borderColor="$color.transparent"
          paddingHorizontal="$space.2.5"
          paddingVertical="$space.1.5"
          fontSize="$2"
          fontWeight="$4"
          color="$color.black"
          onPress={handleSetSelectItem}
        />
      )
    },
    [onSelect]
  )

  return (
    <Stack width="100%" alignItems="center" backgroundColor="$color.white" {...rest}>
      <FlatList
        data={listData}
        keyExtractor={({ id, value }: T): string => id || value}
        renderItem={renderItem}
      />
    </Stack>
  )
}

export default DropdownList

import { memo, useCallback, useMemo, useState } from 'react'
import isEqual from 'react-fast-compare'
import { FlatList, ListRenderItem } from 'react-native'
import {
  Label,
  RadioGroup,
  RadioGroupProps,
  Separator as TSeparator,
  XStack,
  YStack,
} from 'tamagui'

import { IRadioItem } from '@types'

import styles, { StyledIndicator, StyledItem } from './styles'

export type RadioProps = RadioGroupProps & {
  radioList: IRadioItem[]
}

const Separator = () => <TSeparator alignSelf="stretch" borderColor="$color.divider" />

const Radio = ({ radioList, ...rest }: RadioProps) => {
  const [selectedItem, setSelectedItem] = useState<string>()
  const handleSelectedRadio = useCallback((value: string): void => setSelectedItem(value), [])
  const renderItem: ListRenderItem<IRadioItem> = useCallback(
    ({ item: { id, name } }) => (
      <XStack
        alignItems="center"
        space="$space.2"
        paddingLeft="$space.3.5"
        paddingVertical="$space.3"
      >
        <StyledItem
          value={name}
          id={id}
          style={selectedItem === name ? styles.selected : styles.normal}
        >
          <StyledIndicator />
        </StyledItem>

        <Label unstyled htmlFor={id} fontWeight="$3" color="$color.gray_50" lineHeight="$4">
          {name}
        </Label>
      </XStack>
    ),
    [selectedItem]
  )
  const renderList = useMemo(
    () => (
      <FlatList
        data={radioList}
        keyExtractor={({ id }: IRadioItem): string => id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    ),
    [radioList, renderItem]
  )

  return (
    <RadioGroup onValueChange={handleSelectedRadio} {...rest}>
      <YStack>{renderList}</YStack>
    </RadioGroup>
  )
}

export default memo(Radio, isEqual)

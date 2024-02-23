import { memo, useCallback, useMemo, useState } from 'react'
import isEqual from 'react-fast-compare'
import { Label, RadioGroup, RadioGroupProps, Separator, XStack, YStack } from 'tamagui'

import { IRadioItem } from '@types'

import styles, { StyledIndicator, StyledItem } from './styles'

export type RadioProps = RadioGroupProps & {
  radioList: IRadioItem[]
  onChangeValue?: (value: string) => void
}

const Radio = ({ radioList, onChangeValue, ...rest }: RadioProps) => {
  const [selectedItem, setSelectedItem] = useState<string>()
  const handleSelectedRadio = useCallback(
    (value: string): void => {
      if (onChangeValue) onChangeValue(value)
      setSelectedItem(value)
    },
    [onChangeValue]
  )
  const renderList = useMemo(() => {
    return radioList.map(({ id, name }: IRadioItem, index: number) => (
      <YStack key={id}>
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
        {/* Do not render Separator component on the last item */}
        {index !== radioList.length - 1 && (
          <Separator alignSelf="stretch" borderColor="$color.divider" />
        )}
      </YStack>
    ))
  }, [radioList, selectedItem])

  return (
    <RadioGroup onValueChange={handleSelectedRadio} {...rest}>
      <YStack>{renderList}</YStack>
    </RadioGroup>
  )
}

export default memo(Radio, isEqual)

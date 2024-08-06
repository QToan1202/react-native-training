import { Heading, XStack, YStack, YStackProps } from 'tamagui'
import { GestureResponderEvent } from 'react-native'

import { Button, IconButton, Text } from '@shared/components'

import { TAddress } from '../../types'
import { Trash } from '../../assets/images'

type TAddressCard = 'id' | 'name' | 'address' | 'phone'

export type AddressProps = YStackProps &
  Pick<TAddress, TAddressCard> & {
    isSelected?: boolean
    onEditAddress?: (id: string) => void
    onDeleteAddress?: (id: string) => void
    onSelectAddress?: (id: string) => void
  }

const Address = ({
  id,
  address,
  name,
  phone,
  isSelected = false,
  onEditAddress,
  onDeleteAddress,
  onSelectAddress,
  onPress,
  ...rest
}: AddressProps) => {
  const handlePressItem = (event: GestureResponderEvent) => {
    onPress?.(event)

    onSelectAddress?.(id)
  }
  const handleEditAddress = () => {
    onEditAddress?.(id)
  }
  const handleDeleteAddress = () => {
    onDeleteAddress?.(id)
  }

  return (
    <YStack
      padding={24}
      gap={16}
      borderRadius={5}
      borderWidth={1}
      borderColor="$border"
      onPress={handlePressItem}
      {...(isSelected && { borderColor: '$primary' })}
      {...rest}
    >
      <Heading ellipse color="$primary" fontWeight="700" textTransform="capitalize">
        {name}
      </Heading>
      <Text
        color="$gray_100"
        fontSize="$1"
        textTransform="capitalize"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {address}
      </Text>
      <Text color="$gray_100" fontSize="$1">
        +{phone}
      </Text>
      <XStack gap={20}>
        <Button
          paddingVertical={8}
          paddingHorizontal={24}
          title="edit"
          fontWeight="700"
          onPress={handleEditAddress}
        />
        <IconButton opacity={0.5} onPress={handleDeleteAddress}>
          <Trash />
        </IconButton>
      </XStack>
    </YStack>
  )
}

export default Address

import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { XStack, XStackProps, YStack, getTokens } from 'tamagui'

import Button from '@components/Button'
import Paragraph from '@components/Paragraph'

export type AddressProps = {
  name: string
  streetAddress: string
  onPress: () => void
} & XStackProps

const Address = ({ name, streetAddress, onPress, ...rest }: AddressProps) => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      space={4}
      paddingVertical={15}
      paddingHorizontal={20}
      backgroundColor="$color.white"
      {...rest}
    >
      <YStack space={4}>
        <Paragraph fontWeight="$2" color="$gray_50" lineHeight={20} content={name} />
        <Paragraph
          fontWeight="$2"
          color="$gray_50"
          lineHeight={20}
          opacity={0.7}
          content={streetAddress}
        />
      </YStack>
      <Button
        paddingVertical={4}
        paddingHorizontal={getTokens().space[5].val - 1}
        onPress={onPress}
        fontSize="$1"
        title="Change"
      />
    </XStack>
  )
}

export default memo(Address, isEqual)

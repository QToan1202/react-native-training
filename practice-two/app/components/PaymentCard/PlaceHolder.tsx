import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image } from 'react-native'
import { YStack, YStackProps } from 'tamagui'

import Paragraph from '@components/Paragraph'

export type PlaceHolderProps = YStackProps & {
  onTouchPlaceHolder?: () => void
}

const PlaceHolder = ({ onTouchPlaceHolder, ...rest }: PlaceHolderProps) => {
  return (
    <YStack
      paddingVertical={36}
      paddingHorizontal={38}
      space={20}
      alignSelf="flex-start"
      alignItems="center"
      borderWidth="$space.1"
      borderRadius="$radius.5"
      borderColor="$color.gray_300"
      borderStyle="dashed"
      onPress={onTouchPlaceHolder}
      {...rest}
    >
      <Image source={require('@assets/payment/icon.png')} />
      <Paragraph
        color="$color.gray_300"
        textTransform="capitalize"
        lineHeight={28}
        letterSpacing={0.5}
        content="add payment method"
      />
    </YStack>
  )
}

export default memo(PlaceHolder, isEqual)

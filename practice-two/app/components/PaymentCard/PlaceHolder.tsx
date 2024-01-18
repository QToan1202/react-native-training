import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image } from 'react-native'
import { View, YStackProps } from 'tamagui'

import Paragraph from '@components/Paragraph'
import { styles } from './styles'

export type PlaceHolderProps = YStackProps & {
  onTouchPlaceHolder?: () => void
}

const PlaceHolder = ({ onTouchPlaceHolder, ...rest }: PlaceHolderProps) => {
  return (
    <View style={styles.border} space={20} onPress={onTouchPlaceHolder} {...rest}>
      <Image source={require('@assets/payment/icon.png')} />
      <Paragraph
        color="$color.gray_300"
        textTransform="capitalize"
        lineHeight={28}
        letterSpacing={0.5}
        content="add payment method"
      />
    </View>
  )
}

export default memo(PlaceHolder, isEqual)

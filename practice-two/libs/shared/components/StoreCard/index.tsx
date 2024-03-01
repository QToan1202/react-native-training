import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageBackgroundProps } from 'react-native'
import { SizeTokens, Stack, StackProps, YStack } from 'tamagui'

import { containerStyles } from '@practice-two/shared'
import Avatar, { AvatarProps } from '../Avatar'
import Button from '../Button'

import styles from './styles'

export type StoreCardProps = StackProps &
  Pick<AvatarProps, 'source' | 'name'> & {
    bgImage: ImageBackgroundProps['source']
    btnTitle: string
    size?: SizeTokens
    onPressBtn?: () => void
  }

const StoreCard = ({
  bgImage,
  source,
  name,
  size = 'xl',
  btnTitle,
  onPressBtn,
  ...rest
}: StoreCardProps) => {
  return (
    <Stack
      alignSelf="baseline"
      paddingTop="$space.9"
      paddingBottom="$space.4"
      paddingHorizontal="$space.5"
      w={160}
      style={containerStyles.card}
      {...rest}
    >
      <Image source={bgImage} style={styles.img} />
      <YStack justifyContent="center" alignItems="center">
        <Avatar source={source} name={name} size={size} block />
        <Button
          marginTop="$space.4"
          paddingHorizontal="$space.5"
          paddingVertical={4}
          fontSize={10}
          title={btnTitle}
          onPress={onPressBtn}
        />
      </YStack>
    </Stack>
  )
}

export default memo(StoreCard, isEqual)

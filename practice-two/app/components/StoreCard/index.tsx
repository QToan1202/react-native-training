import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Image, ImageBackgroundProps, ViewProps } from 'react-native'
import { Stack, YStack } from 'tamagui'

import Avatar, { AvatarProps } from '@components/Avatar'
import Button from '@components/Button'
import { containerStyles } from '@styles'

import styles from './styles'

export type StoreCardProps = {
  image: ImageBackgroundProps['source']
  btnTitle: string
  onPressBtn: () => void
} & ViewProps &
  Pick<AvatarProps, 'source' | 'name' | 'size'>

const StoreCard = ({
  image,
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
      style={containerStyles.card}
      {...rest}
    >
      <Image source={image} style={styles.img} />
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

import { cloneElement, FC } from 'react'
import { ImageURISource } from 'react-native'
import { Heading, YStack, YStackProps, getTokenValue } from 'tamagui'

import { Image, Text } from '@practice-three/shared/ui'

type DealCardHeading =
  | {
      brandImage: ImageURISource['uri'] | FC
      preTitle?: never
    }
  | {
      brandImage?: never
      preTitle: string
    }
export type DealCardProps = YStackProps &
  DealCardHeading & {
    image: ImageURISource['uri'] | FC
    title: string
  }

const DealCard = ({ image, preTitle, brandImage, title, ...rest }: DealCardProps) => {
  const MainImage = image
  const SubImage = brandImage

  return (
    <YStack
      justifyContent="center"
      alignItems="center"
      alignSelf="flex-start"
      overflow="hidden"
      borderRadius={10}
      backgroundColor="$pure_white"
      {...rest}
    >
      {typeof MainImage === 'function' ? (
        cloneElement(<MainImage />, {
          width: getTokenValue('$deal.mobileWidth'),
          height: getTokenValue('$deal.mobileHeight'),
        })
      ) : (
        <Image
          source={{
            width: getTokenValue('$deal.mobileWidth'),
            height: getTokenValue('$deal.mobileHeight'),
            uri: MainImage,
          }}
        />
      )}
      {typeof SubImage === 'function' &&
        cloneElement(<SubImage />, {
          width: 35,
          height: 25,
        })}
      {typeof SubImage === 'string' && (
        <Image
          source={{
            width: 35,
            height: 25,
            uri: SubImage,
          }}
        />
      )}
      {preTitle && <Text textTransform="capitalize">{preTitle}</Text>}
      <Heading ellipse color="$black" fontSize="$4" fontWeight="500">
        {title}
      </Heading>
    </YStack>
  )
}

export default DealCard

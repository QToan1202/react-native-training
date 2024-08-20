import { getTokenValue, Heading, Separator, styled, XStack, XStackProps, YStack } from 'tamagui'

import { Image, Text as BaseText } from '@practice-three/components'

export type BlogCardProps = XStackProps & {
  title: string
  content: string
  author: string
  image?: string
}

const Text = styled(BaseText, {
  color: '$gray_100',
  fontSize: '$3',
})

const BlogCard = ({
  title = '',
  content = '',
  author = '',
  image = '',
  ...rest
}: BlogCardProps) => {
  return (
    <XStack
      maxWidth={getTokenValue('$blogCard.width')}
      maxHeight={getTokenValue('$blogCard.height')}
      backgroundColor="$pure_white"
      {...rest}
    >
      <Image flex={1} source={{ uri: image, height: 360 }} />
      <YStack
        justifyContent="space-evenly"
        alignItems="flex-start"
        paddingVertical={26}
        paddingHorizontal={32}
        maxWidth={230}
      >
        <Text>Blog</Text>
        <Heading color="$black" fontSize="$4">
          {title}
        </Heading>
        <YStack gap={12}>
          <Text>{content}</Text>
          <Separator width={40} borderColor="$black" />
          <Text color="$black">{author}</Text>
        </YStack>
      </YStack>
    </XStack>
  )
}

export default BlogCard

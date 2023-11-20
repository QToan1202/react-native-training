import { Image } from 'react-native'
import { GetProps, Stack, styled } from 'tamagui'

const StyledStack = styled(Stack, {
  space: 10,
  alignItems: 'center',
  columnGap: 4,

  variants: {
    inline: {
      true: {
        flexDirection: 'row',
      },
    },

    block: {
      true: {
        flexDirection: 'column',
      },
    },
  } as const,

  defaultVariants: {
    inline: true,
  },
})

export type StyledStackProps = GetProps<typeof StyledStack>

export const StyledImage = styled(Image, {
  name: 'Image',
  source: { uri: '' },
})

export type StyledImageProps = GetProps<typeof StyledImage>

export default StyledStack

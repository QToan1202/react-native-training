import { GetProps, Heading, styled } from 'tamagui'

const StyledHeading = styled(Heading, {
  variants: {
    size: {
      '...fontSize': (value, { font }) => {
        return {
          fontSize: font?.size[value] ?? value,
          lineHeight: font?.lineHeight[value] ?? value,
        }
      },
    },
  } as const,
})

export type StyledHeadingProps = GetProps<typeof StyledHeading>

export default StyledHeading

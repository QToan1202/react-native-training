import { GetProps, Heading as THeading, styled } from 'tamagui'

const Heading = styled(THeading, {})

export type HeadingProps = GetProps<typeof Heading>

export default Heading

import { Heading, XStack, XStackProps } from 'tamagui'
import { GestureResponderEvent } from 'react-native'

import { IconButton } from '@shared/components'

import { ArrowLeft } from '../../assets/images'

type HeaderProps = XStackProps & {
  title: string
  onBack: (event: GestureResponderEvent) => void
}

const Header = ({ title, onBack, ...rest }: HeaderProps) => (
  <XStack gap={6} alignItems="center" {...rest}>
    <IconButton onPress={onBack}>
      <ArrowLeft />
    </IconButton>
    <Heading color="$pure_black" fontSize="$4" fontWeight="500" textTransform="capitalize">
      {title}
    </Heading>
  </XStack>
)

export default Header

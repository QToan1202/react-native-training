import { XStack, Heading, XStackProps } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IconButton } from '@shared/components'
import { CartStack } from '@shared/types'

import { HeaderHeart, Bag, ArrowLeft, Search } from '../../assets/images'

export type PromoCodeHeaderProps = XStackProps & NativeStackScreenProps<CartStack, 'PromoCode'>

const PromoCodeHeader = ({ navigation, route, ...rest }: PromoCodeHeaderProps) => {
  const handlePressArrowLeft = () => navigation.goBack()
  const handlePressIcon = () => {
    throw new Error('Function not implemented')
  }

  return (
    <XStack justifyContent="space-between" alignItems="center" {...rest}>
      <XStack alignItems="center" gap={12}>
        <IconButton onPress={handlePressArrowLeft}>
          <ArrowLeft />
        </IconButton>
        <Heading color="$black" fontSize="$4" fontWeight="500">
          Promo Code
        </Heading>
      </XStack>
      <XStack alignItems="center" gap={12}>
        <IconButton onPress={handlePressIcon}>
          <Search />
        </IconButton>
        <IconButton onPress={handlePressIcon}>
          <HeaderHeart />
        </IconButton>
        <IconButton onPress={handlePressIcon}>
          <Bag />
        </IconButton>
      </XStack>
    </XStack>
  )
}

export default PromoCodeHeader

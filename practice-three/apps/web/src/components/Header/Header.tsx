import { useMemo } from 'react'
import { styled, XStack } from 'tamagui'
import { Link, useNavigate } from 'react-router-dom'

import { IconButton, Search, Text as BaseText, Avatar } from '@practice-three/components'
import { useAuthStore } from '@practice-three/contexts'

import { NAV_ITEMS } from '../../constants'
import { Cart, Heart, Logo } from '../../assets/images'

const Text = styled(BaseText, {
  fontSize: '$3',
  textDecorationLine: 'none',
})

const Header = () => {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)
  const renderNavItems = useMemo(
    () =>
      NAV_ITEMS.map(({ link, title }, index) => (
        <Text asChild>
          <Link key={index} to={link}>
            {title}
          </Link>
        </Text>
      )),
    []
  )
  const handleOnPressLogo = () => navigate('/')
  const handleOnPressHeart = () => navigate('wishlists')
  const handleOnPressCart = () => navigate('carts')

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingVertical={16}
      paddingHorizontal={38}
      backgroundColor="$pure_white"
    >
      <XStack gap={60} alignItems="center">
        <IconButton onPress={handleOnPressLogo}>
          <Logo />
        </IconButton>
        {renderNavItems}
      </XStack>
      <XStack gap={60}>
        <Search width={500} />
        <XStack gap={32} alignItems="center">
          <IconButton onPress={handleOnPressHeart}>
            <Heart />
          </IconButton>
          <IconButton onPress={handleOnPressCart}>
            <Cart />
          </IconButton>
          <XStack gap={12} alignItems="center">
            <Avatar circular width={40} image="" />
            <Text color="$gray_200" textTransform="capitalize">
              {user?.name || 'Anne Doe'}
            </Text>
          </XStack>
        </XStack>
      </XStack>
    </XStack>
  )
}

export default Header

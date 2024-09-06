import { useMemo } from 'react'
import { Heading, XStack } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { useAuthStore } from '@practice-three/contexts'
import { Avatar, IconButton } from '@practice-three/components'

import { findUserQuery } from '../../../hooks'
import { Search } from '../../../assets/images'
import { TUser } from '@practice-three/types'

const Header = () => {
  const user: TUser | undefined = useAuthStore((state) => state.user)
  const { data: userData, isSuccess: isGetUserDataSuccess } = useQuery(
    findUserQuery('users', user?.id || '')
  )
  const optimisticUser = useMemo(
    () => (isGetUserDataSuccess ? userData : user),
    [isGetUserDataSuccess, user, userData]
  )

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingVertical={6}
      paddingHorizontal={20}
      backgroundColor="$pure_white"
    >
      <XStack gap={12}>
        <Avatar
          circular
          width={35}
          image="https://images.unsplash.com/photo-1723979304121-b581868e6521"
        />
        <Heading color="$pure_black" fontSize="$4" fontWeight="500" textTransform="capitalize">
          {optimisticUser?.name}
        </Heading>
      </XStack>
      <IconButton>
        <Search />
      </IconButton>
    </XStack>
  )
}

export default Header

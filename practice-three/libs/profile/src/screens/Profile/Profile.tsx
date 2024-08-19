import { useMemo } from 'react'
import { Avatar, Heading, XStack, YStack } from 'tamagui'
import { useQuery } from '@tanstack/react-query'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ProfileStack } from '@practice-three/types'
import { useAuthStore } from '@practice-three/contexts'
import { Button, Text } from '@practice-three/components'

import { PROFILE_ITEMS, type TProfileItems } from '../../constants'
import { ProfileItem } from '../../components'
import { findUserQuery } from '../../hooks'
import { Logout } from '../../assets/images'

type ProfileScreenProps = NativeStackScreenProps<ProfileStack, 'Profile'>

const Profile = ({ navigation }: ProfileScreenProps) => {
  const [user, handleLogout] = useAuthStore((state) => [state.user, state.clearAuth])
  const { data: userData, isSuccess: isGetUserDataSuccess } = useQuery(
    findUserQuery('users', user?.id || 'd3d1')
  )
  const optimisticUser = useMemo(
    () => (isGetUserDataSuccess ? userData : user),
    [isGetUserDataSuccess, user, userData]
  )
  const renderListProfile = useMemo(() => {
    return PROFILE_ITEMS.map((props: TProfileItems, index: number) => (
      <ProfileItem key={index} {...props} />
    ))
  }, [])
  const renderUserInfo = useMemo(() => {
    return (
      <XStack gap={16}>
        <Avatar circular width={57}>
          <Avatar.Image source={{ uri: '' }} />
          <Avatar.Fallback backgroundColor="$pale" />
        </Avatar>
        <YStack justifyContent="space-between">
          <Heading color="$pure_black" fontSize="$3" fontWeight="700" textTransform="capitalize">
            {optimisticUser?.name}
          </Heading>
          <Text color="$gray_100">{optimisticUser?.email}</Text>
        </YStack>
      </XStack>
    )
  }, [optimisticUser?.email, optimisticUser?.name])

  return (
    <YStack paddingTop={42} paddingHorizontal={20} gap={42}>
      {renderUserInfo}
      {renderListProfile}
      <Button
        variant="text"
        title="log out"
        startIcon={<Logout />}
        onPress={handleLogout}
        alignSelf="flex-start"
        paddingHorizontal={0}
        color="$red_300"
        fontWeight="700"
      />
      <Text textAlign="center" color="$gray_400" fontWeight="500">
        Privacy Policy | Terms and Conditions
      </Text>
    </YStack>
  )
}

export default Profile

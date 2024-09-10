import { ReactNode } from 'react'
import { XStack, XStackProps } from 'tamagui'

import { IconButton, Text } from '@practice-three/shared/ui'

import { ArrowRight } from '../../assets/images'

export type ProfileItemProps = XStackProps & {
  icon: ReactNode
  title: string
}

const ProfileItem = ({ icon, title }: ProfileItemProps) => (
  <XStack justifyContent="space-between" alignItems="center">
    <XStack gap={18} alignItems="center">
      {icon}
      <Text fontWeight="500" textTransform="capitalize">
        {title}
      </Text>
    </XStack>
    <IconButton>
      <ArrowRight />
    </IconButton>
  </XStack>
)

export default ProfileItem

import { Heading, XStack, YStack, YStackProps } from 'tamagui'

import { Button, IconButton, Skeleton, Text } from '@shared/components'

import { Trash } from '../../assets/images'

export type AddressSkeletonProps = YStackProps

const Address = ({ ...props }: AddressSkeletonProps) => (
  <YStack padding={24} gap={16} borderRadius={5} borderWidth={1} borderColor="$border" {...props}>
    <Skeleton>
      <Heading ellipse color="$primary" fontWeight="700" textTransform="capitalize">
        Jane Doe
      </Heading>
    </Skeleton>
    <Skeleton>
      <Text
        color="$gray_100"
        fontSize="$1"
        textTransform="capitalize"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        52 Ridgewood Drive, SW. Saxton St. North Fort Myers, Henrico, VA 23228
      </Text>
    </Skeleton>
    <Skeleton>
      <Text color="$gray_100" fontSize="$1">
        +91 9087654321
      </Text>
    </Skeleton>
    <Skeleton>
      <XStack gap={20}>
        <Button paddingVertical={8} paddingHorizontal={24} title="edit" fontWeight="700" />
        <IconButton opacity={0.5}>
          <Trash />
        </IconButton>
      </XStack>
    </Skeleton>
  </YStack>
)

export default Address

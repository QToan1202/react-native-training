import { XStack, YStack, YStackProps } from 'tamagui'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import { Button, Text } from '@practice-three/components'
import { TOffer } from '@practice-three/types'

export type PromoCodeProps = YStackProps & TOffer

dayjs.extend(advancedFormat)

const PromoCode = ({
  id,
  name,
  code,
  description,
  discountPercentage,
  minimumPurchaseAmount,
  validFrom,
  validTo,
  ...rest
}: PromoCodeProps) => {
  return (
    <YStack gap={12} {...rest}>
      <XStack justifyContent="space-between">
        <Text
          width={140}
          paddingVertical={10}
          alignSelf="baseline"
          borderWidth={1}
          borderColor="$gray_100"
          borderStyle="dashed"
          textAlign="center"
        >
          {code}
        </Text>
        <Button title="apply" variant="text" paddingVertical={1} alignSelf="flex-start" />
      </XStack>
      <YStack gap={6}>
        <Text>Save {discountPercentage}%</Text>
        <Text>{description}</Text>
        <Text>
          Expires on: {dayjs(validTo).format('Do MMMM YYYY')} | {dayjs(validTo).format('hh:mm A')}
        </Text>
      </YStack>
    </YStack>
  )
}

export default PromoCode

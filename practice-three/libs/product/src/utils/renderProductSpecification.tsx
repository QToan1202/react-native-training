import { isWeb, Separator, YStack } from 'tamagui'

import { Text } from '@practice-three/components'
import { TProduct, TProductSpecification } from '@practice-three/types'

const renderSpecificationItem = (labels: Record<string, string>, data: TProduct) => {
  const target = Object.keys(labels) as (keyof TProductSpecification)[]
  const middleIndex = Math.ceil(target.length / 2)
  const [firstHalf, secondHalf] = [target.slice(0, middleIndex), target.slice(middleIndex)]
  const renderCol = (arr: (keyof TProductSpecification)[]) =>
    arr.map((item: keyof TProductSpecification) => (
      <YStack gap={10} key={item}>
        <Text color="$gray_100" $md={{ fontSize: '$3' }}>
          {labels[item]}
        </Text>
        <Text $md={{ fontSize: '$3' }}>{data.specifications[item]}</Text>
        <Separator
          alignSelf="stretch"
          {...(isWeb ? { borderColor: '$gray_100' } : { borderColor: '$separate' })}
        />
      </YStack>
    ))

  return [renderCol(firstHalf), renderCol(secondHalf)]
}

export default renderSpecificationItem

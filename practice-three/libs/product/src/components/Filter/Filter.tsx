import { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { H2, Separator, XStack, YStack, YStackProps } from 'tamagui'

import { Accordion, AccordionItem, ControllerCheckbox, Slider, Text } from '@shared/components'
import {
  convertToLowerStr,
  getBrands,
  getColors,
  getDiscounts,
  getMinMaxPrices,
  parseURLSearchParams,
  resolveValues,
} from '@shared/utils'

import { FILTER_LABELS } from '../../constants'
import { useGetProducts } from '../../hooks'

export type FilterProps = YStackProps

const DEFAULT_SEARCH_PARAMS = {}

const Filter = ({ ...rest }: FilterProps) => {
  const { data: products } = useGetProducts(`/products`)
  const [min, max] = getMinMaxPrices(products || [])
  const brandNames = getBrands(products || [])
  const colors = getColors(products || [])
  const discountPercent = getDiscounts(products || [])
  const [, setSearchParams] = useSearchParams(DEFAULT_SEARCH_PARAMS)
  const { control, getValues, reset } = useForm<Record<string, Record<string, boolean>>>() // Example type {foo: {bar: false}}
  const handleFilterBrandName = () => {
    setSearchParams((prev) => ({
      ...parseURLSearchParams(prev),
      ...{ brandName: resolveValues(getValues('brandName'), brandNames, true) },
    }))
  }
  const handleFilterColor = () => {
    setSearchParams((prev) => ({
      ...parseURLSearchParams(prev),
      ...{ color: resolveValues(getValues('color'), colors, true) },
    }))
  }
  const handleFilterDiscount = () => {
    setSearchParams((prev) => ({
      ...parseURLSearchParams(prev),
      ...{
        discountPercent: resolveValues(
          getValues('discountPercent'),
          discountPercent.map((item) => `${item}%`),
          true
        ).map((item: string) => item.replace('%', '')),
      },
    }))
  }
  const handleClearAllFilterOpts = () => {
    setSearchParams(DEFAULT_SEARCH_PARAMS)
    reset()
  }
  const renderFilterOps = (label: string) => {
    switch (label) {
      case 'brand':
        return brandNames.map((item: string) => (
          <ControllerCheckbox
            key={item}
            name={`brandName[${convertToLowerStr(item)}]`}
            control={control}
            label={item}
            onChecked={handleFilterBrandName}
          />
        ))

      case 'color':
        return colors.map((item: string) => (
          <ControllerCheckbox
            key={item}
            name={`color[${convertToLowerStr(item)}]`}
            control={control}
            label={item}
            onChecked={handleFilterColor}
          />
        ))

      case 'discount range':
        return discountPercent
          .map(String)
          .map((item: string) => (
            <ControllerCheckbox
              key={item}
              name={`discountPercent[${convertToLowerStr(item)}%]`}
              control={control}
              label={item}
              onChecked={handleFilterDiscount}
            />
          ))

      default:
        return null
    }
  }

  return (
    <YStack
      elevation={5}
      padding={22}
      borderRadius={10}
      $platform-ios={{
        shadowColor: '$pure_black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
      alignSelf="flex-start"
      {...rest}
    >
      <XStack justifyContent="space-between" alignItems="center">
        <H2 color="$black" fontSize="$6">
          Filters
        </H2>
        <Text
          color="$blue_200"
          fontSize="$3"
          onPress={handleClearAllFilterOpts}
          hoverStyle={{
            cursor: 'pointer',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
          }}
        >
          Clear all
        </Text>
      </XStack>
      <Text>Price</Text>
      <Slider min={0} max={max} step={1} defaultValue={[0, 10]} minStepsBetweenThumbs={10} />
      <XStack justifyContent="space-between">
        <YStack>
          <Text fontSize="$3" color="$gray_200">
            Min
          </Text>
          <Text fontSize={16}>Rs. {min}</Text>
        </YStack>
        <YStack>
          <Text fontSize="$3" color="$gray_200">
            Max
          </Text>
          <Text fontSize={16}>Rs. {max}</Text>
        </YStack>
      </XStack>
      <Accordion type="multiple">
        {FILTER_LABELS.map((label: string) => (
          <Fragment key={label}>
            <Separator marginVertical={20} />
            <AccordionItem
              label={
                <Text ellipse fontSize="$5" fontWeight="bold" textTransform="capitalize">
                  {label}
                </Text>
              }
              padding={5}
              borderWidth={0}
              backgroundColor="$pure_white"
              focusStyle={{
                backgroundColor: '$transparent',
              }}
              hoverStyle={{
                backgroundColor: '$transparent',
              }}
            >
              {renderFilterOps(label)}
            </AccordionItem>
          </Fragment>
        ))}
      </Accordion>
    </YStack>
  )
}

export default Filter
